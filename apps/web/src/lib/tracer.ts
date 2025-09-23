import { trace, SpanStatusCode } from '@opentelemetry/api';

// Get the current tracer
export const tracer = trace.getTracer('scilent-one-web', '1.0.0');

// Export SpanStatusCode for convenience
export { SpanStatusCode };

/**
 * Simple logging function that creates spans for better observability
 */
export const logger = {
  info: (message: string, attributes?: Record<string, any>) => {
    const span = tracer.startSpan(message, {
      attributes: {
        'log.level': 'info',
        ...attributes,
      },
    });
    span.setStatus({ code: SpanStatusCode.OK });
    span.end();
    console.log(`[INFO] ${message}`, attributes);
  },

  error: (message: string, error?: Error, attributes?: Record<string, any>) => {
    const span = tracer.startSpan(message, {
      attributes: {
        'log.level': 'error',
        'error.message': error?.message || message,
        'error.stack': error?.stack,
        ...attributes,
      },
    });
    span.setStatus({ code: SpanStatusCode.ERROR, message: error?.message || message });
    span.end();
    console.error(`[ERROR] ${message}`, error, attributes);
  },

  warn: (message: string, attributes?: Record<string, any>) => {
    const span = tracer.startSpan(message, {
      attributes: {
        'log.level': 'warn',
        ...attributes,
      },
    });
    span.setStatus({ code: SpanStatusCode.OK });
    span.end();
    console.warn(`[WARN] ${message}`, attributes);
  },
};

/**
 * Utility function to create a span for async operations
 */
export async function withSpan<T>(
  name: string,
  fn: () => Promise<T>,
  attributes?: Record<string, any>
): Promise<T> {
  const span = tracer.startSpan(name, attributes ? { attributes } : {});

  try {
    const result = await fn();
    span.setStatus({ code: SpanStatusCode.OK });
    return result;
  } catch (error) {
    span.setStatus({
      code: SpanStatusCode.ERROR,
      message: error instanceof Error ? error.message : 'Unknown error'
    });
    span.recordException(error as Error);
    throw error;
  } finally {
    span.end();
  }
}

/**
 * Utility function to create a span for sync operations
 */
export function withSyncSpan<T>(
  name: string,
  fn: () => T,
  attributes?: Record<string, any>
): T {
  const span = tracer.startSpan(name, attributes ? { attributes } : {});

  try {
    const result = fn();
    span.setStatus({ code: SpanStatusCode.OK });
    return result;
  } catch (error) {
    span.setStatus({
      code: SpanStatusCode.ERROR,
      message: error instanceof Error ? error.message : 'Unknown error'
    });
    span.recordException(error as Error);
    throw error;
  } finally {
    span.end();
  }
}

/**
 * Add custom attributes to the current span
 */
export function addSpanAttributes(attributes: Record<string, any>) {
  const span = trace.getActiveSpan();
  if (span) {
    span.setAttributes(attributes);
  }
}

/**
 * Set the status of the current span
 */
export function setSpanStatus(status: SpanStatusCode, message?: string) {
  const span = trace.getActiveSpan();
  if (span) {
    span.setStatus(message ? { code: status, message } : { code: status });
  }
}