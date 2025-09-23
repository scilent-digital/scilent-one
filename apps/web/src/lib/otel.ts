import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';

// Simple console exporter for development
class ConsoleSpanExporter {
  export(spans: any[], resultCallback: Function) {
    spans.forEach(span => {
      console.log(JSON.stringify(span, null, 2));
    });
    resultCallback({ code: 0 });
  }

  shutdown() {
    return Promise.resolve();
  }
}

const consoleExporter = new ConsoleSpanExporter();

// Initialize the SDK with auto-instrumentations
export const otelSDK = new NodeSDK({
  serviceName: 'scilent-one-web',
  traceExporter: consoleExporter,
  instrumentations: [getNodeAutoInstrumentations()],
  resourceDetectors: [],
});

// Gracefully shut down the SDK on process exit
export const shutdown = async () => {
  try {
    await otelSDK.shutdown();
    console.log('OpenTelemetry SDK shut down successfully');
  } catch (error) {
    console.error('Error shutting down OpenTelemetry SDK', error);
  }
};

// Initialize OpenTelemetry (call this in your app)
export const initOpenTelemetry = () => {
  otelSDK.start();
  console.log('OpenTelemetry SDK initialized');

  // Handle graceful shutdown
  process.on('SIGTERM', async () => {
    await shutdown();
    process.exit(0);
  });

  process.on('SIGINT', async () => {
    await shutdown();
    process.exit(0);
  });
};