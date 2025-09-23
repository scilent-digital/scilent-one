import { trace, SpanStatusCode } from '@opentelemetry/api';

// Client-side tracer for browser environment
export const clientTracer = trace.getTracer('scilent-one-web-client', '1.0.0');

/**
 * Client-side logging utility that creates spans
 */
export const clientLogger = {
  info: (message: string, attributes?: Record<string, any>) => {
    const span = clientTracer.startSpan(message, {
      attributes: {
        'log.level': 'info',
        'environment': 'client',
        ...attributes,
      },
    });
    span.setStatus({ code: SpanStatusCode.OK });
    span.end();

    if (typeof window !== 'undefined') {
      console.log(`[CLIENT INFO] ${message}`, attributes);
    }
  },

  error: (message: string, error?: Error, attributes?: Record<string, any>) => {
    const span = clientTracer.startSpan(message, {
      attributes: {
        'log.level': 'error',
        'environment': 'client',
        'error.message': error?.message || message,
        'error.stack': error?.stack,
        ...attributes,
      },
    });
    span.setStatus({ code: SpanStatusCode.ERROR, message: error?.message || message });
    span.end();

    if (typeof window !== 'undefined') {
      console.error(`[CLIENT ERROR] ${message}`, error, attributes);
    }
  },

  warn: (message: string, attributes?: Record<string, any>) => {
    const span = clientTracer.startSpan(message, {
      attributes: {
        'log.level': 'warn',
        'environment': 'client',
        ...attributes,
      },
    });
    span.setStatus({ code: SpanStatusCode.OK });
    span.end();

    if (typeof window !== 'undefined') {
      console.warn(`[CLIENT WARN] ${message}`, attributes);
    }
  },
};

/**
 * Hook to measure component render performance
 */
export function useComponentTracing(componentName: string) {
  const startTime = performance.now();

  const logRender = (phase: 'mount' | 'update' | 'unmount', props?: any) => {
    const endTime = performance.now();
    const duration = endTime - startTime;

    clientLogger.info(`Component ${phase}: ${componentName}`, {
      'component.name': componentName,
      'component.phase': phase,
      'component.render_duration_ms': duration,
      'component.props': props ? Object.keys(props) : [],
    });
  };

  return { logRender };
}

/**
 * Utility to trace user interactions
 */
export function traceUserInteraction(interactionType: string, elementInfo?: any) {
  clientLogger.info(`User interaction: ${interactionType}`, {
    'interaction.type': interactionType,
    'interaction.element': elementInfo?.tagName || 'unknown',
    'interaction.id': elementInfo?.id,
    'interaction.class': elementInfo?.className,
  });
}

/**
 * Utility to trace navigation events
 */
export function traceNavigation(from: string, to: string, navigationType?: string) {
  clientLogger.info('Navigation event', {
    'navigation.from': from,
    'navigation.to': to,
    'navigation.type': navigationType || 'client-side',
  });
}

/**
 * Utility to trace errors in React components
 */
export function traceComponentError(componentName: string, error: Error, errorInfo?: any) {
  clientLogger.error(`Component error in ${componentName}`, error, {
    'component.name': componentName,
    'component.error_boundary': errorInfo?.componentStack,
    'component.error_info': errorInfo,
  });
}