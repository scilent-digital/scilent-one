/**
 * OpenTelemetry Usage Examples
 *
 * This file contains examples of how to use the OpenTelemetry tracing utilities
 * in different parts of your Next.js application.
 */

import { useEffect } from 'react';
import { withSpan, logger, setSpanStatus, SpanStatusCode } from './tracer';
import { clientLogger, traceUserInteraction, useComponentTracing, traceComponentError } from './client-tracer';

/**
 * SERVER-SIDE EXAMPLES
 * ===============
 */

/**
 * Example: Basic function tracing
 */
export async function exampleBasicTracing() {
  return withSpan('example-basic-operation', async () => {
    logger.info('Starting basic operation');

    // Simulate some work
    await new Promise(resolve => setTimeout(resolve, 100));

    logger.info('Basic operation completed');
    return { result: 'success' };
  });
}

/**
 * Example: Database operation tracing
 */
export async function exampleDatabaseTracing(userId: string) {
  return withSpan('database-user-fetch', async () => {
    try {
      logger.info('Fetching user from database', { 'user.id': userId });

      // Simulate database query
      await new Promise(resolve => setTimeout(resolve, 200));

      const user = {
        id: userId,
        name: 'John Doe',
        email: 'john@example.com'
      };

      logger.info('User fetched successfully', {
        'user.id': user.id,
        'user.email': user.email
      });

      return user;
    } catch (error) {
      logger.error('Database query failed', error as Error, {
        'user.id': userId,
        'operation': 'user_fetch'
      });

      setSpanStatus(SpanStatusCode.ERROR, 'Database query failed');
      throw error;
    }
  }, {
    'db.operation': 'select',
    'db.table': 'users',
    'db.user_id': userId
  });
}

/**
 * Example: API route with comprehensive tracing
 */
export async function exampleApiRouteTracing(requestData: any) {
  return withSpan('api-user-create', async () => {
    logger.info('API request received', {
      'http.method': 'POST',
      'http.route': '/api/user',
      'request.size': JSON.stringify(requestData).length
    });

    // Input validation
    const isValid = await withSpan('validate-input', async () => {
      // Simulate validation logic
      await new Promise(resolve => setTimeout(resolve, 50));
      return requestData && requestData.email;
    });

    if (!isValid) {
      setSpanStatus(SpanStatusCode.ERROR, 'Invalid input data');
      logger.warn('Invalid input data received', { requestData });
      return { error: 'Invalid input' };
    }

    // Process the request
    const result = await withSpan('process-user-creation', async () => {
      // Simulate user creation process
      await new Promise(resolve => setTimeout(resolve, 300));
      return { userId: '123', status: 'created' };
    });

    logger.info('API request completed successfully', {
      'response.status': 201,
      'user.id': result.userId
    });

    return result;
  }, {
    'http.method': 'POST',
    'http.route': '/api/user',
    'api.version': '1.0'
  });
}

/**
 * CLIENT-SIDE EXAMPLES
 * ===============
 */

/**
 * Example: React component with tracing
 */
export function _ExampleComponentTracing() {
  // This would be used in a React component
  const { logRender } = useComponentTracing('ExampleComponent');

  // In useEffect for mount/unmount logging
  useEffect(() => {
    logRender('mount');
    clientLogger.info('Component mounted');

    return () => {
      logRender('unmount');
      clientLogger.info('Component unmounted');
    };
  }, [logRender]);

  const handleClick = () => {
    traceUserInteraction('button_click', {
      tagName: 'button',
      id: 'example-button'
    });

    clientLogger.info('Button clicked', {
      'interaction.type': 'click',
      'element.id': 'example-button'
    });
  };
}

/**
 * Example: Form submission tracing
 */
export async function exampleFormSubmission(formData: any) {
  return withSpan('form-submission', async () => {
    clientLogger.info('Form submission started', {
      'form.fields': Object.keys(formData),
      'form.action': 'user_registration'
    });

    try {
      // Validate form
      const validationResult = await withSpan('form-validation', async () => {
        // Simulate validation
        await new Promise(resolve => setTimeout(resolve, 100));
        return { isValid: true, errors: [] };
      });

      if (!validationResult.isValid) {
        setSpanStatus(SpanStatusCode.ERROR, 'Form validation failed');
        return { error: 'Validation failed' };
      }

      // Submit to API
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const result = await response.json();

      clientLogger.info('Form submission successful', {
        'api.response_status': response.status,
        'user.id': result.userId
      });

      return result;
    } catch (error) {
      clientLogger.error('Form submission failed', error as Error, {
        'form.fields': Object.keys(formData)
      });

      setSpanStatus(SpanStatusCode.ERROR, 'Form submission failed');
      throw error;
    }
  });
}

/**
 * Example: Error boundary tracing
 */
export function exampleErrorBoundary(error: Error, errorInfo: any) {
  traceComponentError('ErrorBoundary', error, errorInfo);

  clientLogger.error('React error boundary triggered', error, {
    'error.boundary': 'global',
    'error.component': errorInfo?.componentStack
  });
}

/**
 * Example: Performance monitoring
 */
export function examplePerformanceMonitoring() {
  // Monitor page load performance
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

      clientLogger.info('Page load performance', {
        'performance.dns': perfData.domainLookupEnd - perfData.domainLookupStart,
        'performance.connection': perfData.connectEnd - perfData.connectStart,
        'performance.response': perfData.responseEnd - perfData.responseStart,
        'performance.dom': perfData.domContentLoadedEventEnd - perfData.responseEnd,
        'performance.load': perfData.loadEventEnd - perfData.loadEventStart,
        'performance.total': perfData.loadEventEnd - (perfData as any).navigationStart
      });
    });
  }
}

/**
 * Example: Custom business logic tracing
 */
export async function exampleBusinessLogicTracing(items: any[]) {
  return withSpan('business-logic-processing', async () => {
    clientLogger.info('Processing business logic', {
      'items.count': items.length,
      'operation.type': 'batch_processing'
    });

    const results = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      const result = await withSpan(`process-item-${i}`, async () => {
        // Simulate processing each item
        await new Promise(resolve => setTimeout(resolve, 50));

        return {
          itemId: item.id,
          processed: true,
          timestamp: new Date().toISOString()
        };
      }, {
        'item.index': i,
        'item.id': item.id
      });

      results.push(result);
    }

    clientLogger.info('Business logic processing completed', {
      'items.processed': results.length,
      'operation.success': true
    });

    return results;
  }, {
    'operation.batch_size': items.length
  });
}

/**
 * Usage Examples in Different Contexts
 * ===================================
 */

// In a Next.js API route:
/*
export async function POST(request: NextRequest) {
  const body = await request.json();

  return withSpan('create-user-api', async () => {
    // Your API logic here
    const user = await exampleDatabaseTracing(body.userId);
    return NextResponse.json({ user });
  });
}
*/

// In a React component:
/*
'use client';

import { exampleFormSubmission, clientLogger } from '../lib/examples';

export default function MyComponent() {
  const handleSubmit = async (formData: any) => {
    try {
      const result = await exampleFormSubmission(formData);
      clientLogger.info('Form submitted successfully', { result });
    } catch (error) {
      clientLogger.error('Form submission failed', error as Error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      // Your form fields here
    </form>
  );
}
*/

// In a utility function:
/*
export async function myUtilityFunction(data: any) {
  return withSpan('my-utility-function', async () => {
    logger.info('Utility function called', { 'data.size': data.length });

    // Your utility logic here

    return processedData;
  });
}
*/