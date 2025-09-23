# OpenTelemetry Setup Guide

This guide explains how OpenTelemetry is configured in the Scilent One Next.js application, providing comprehensive observability for both server-side and client-side operations.

## 🚀 Overview

OpenTelemetry is integrated into this Next.js application to provide:
- **Server-side tracing** for API routes, middleware, and server components
- **Client-side tracing** for React components and user interactions
- **Automatic instrumentation** for HTTP requests, database calls, and more
- **Custom tracing utilities** for business logic and error handling
- **Console-based trace viewing** for development and debugging

## 📁 File Structure

```
src/lib/
├── otel.ts              # OpenTelemetry SDK configuration
├── tracer.ts            # Server-side tracing utilities
├── client-tracer.ts     # Client-side tracing utilities
├── examples.ts          # Usage examples and patterns
└── test-tracing.ts      # Automated tests for tracing functionality

src/app/
├── api/health/route.ts  # Example: Health check API with tracing
├── api/user/route.ts    # Example: User API with comprehensive tracing
└── page.tsx             # Example: React component with client-side tracing

OPENTELEMETRY_README.md   # This documentation file
```

## 🔧 Configuration

### Server-Side Configuration

The OpenTelemetry SDK is configured in `src/lib/otel.ts`:

```typescript
import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-node';

export const otelSDK = new NodeSDK({
  serviceName: 'scilent-one-web',
  serviceVersion: '1.0.0',
  traceExporter: consoleExporter,        // Console output for development
  instrumentations: [getNodeAutoInstrumentations()],
});
```

### Client-Side Configuration

Client-side tracing is available through `src/lib/client-tracer.ts` which uses the global OpenTelemetry API without requiring a separate SDK setup.

## 🛠️ Usage

### Basic Server-Side Tracing

```typescript
import { withSpan, logger } from '../lib/tracer';

export async function myFunction() {
  return withSpan('my-operation', async () => {
    logger.info('Starting operation', { key: 'value' });

    // Your code here
    await doSomething();

    logger.info('Operation completed');
    return result;
  }, {
    'custom.attribute': 'value'
  });
}
```

### API Route Tracing

```typescript
import { NextResponse } from 'next/server';
import { withSpan, logger } from '../../lib/tracer';

export async function GET() {
  return withSpan('api-health-check', async () => {
    logger.info('Health check requested');

    // Simulate database call
    const health = await checkHealth();

    return NextResponse.json(health);
  }, {
    'http.method': 'GET',
    'http.route': '/api/health'
  });
}
```

### Error Handling

```typescript
import { setSpanStatus, SpanStatusCode } from '../lib/tracer';

try {
  // Your code
  await riskyOperation();
} catch (error) {
  logger.error('Operation failed', error);
  setSpanStatus(SpanStatusCode.ERROR, 'Operation failed');
  throw error;
}
```

### React Component Tracing

```typescript
'use client';

import { useEffect } from 'react';
import { clientLogger, useComponentTracing } from '../lib/client-tracer';

export default function MyComponent() {
  const { logRender } = useComponentTracing('MyComponent');

  useEffect(() => {
    logRender('mount');
    clientLogger.info('Component mounted');

    return () => {
      logRender('unmount');
      clientLogger.info('Component unmounted');
    };
  }, [logRender]);

  const handleClick = () => {
    clientLogger.info('Button clicked', {
      'interaction.type': 'click'
    });
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

## 📊 Available Utilities

### Server-Side (`src/lib/tracer.ts`)

- `logger.info(message, attributes)` - Log info messages
- `logger.error(message, error, attributes)` - Log error messages
- `logger.warn(message, attributes)` - Log warning messages
- `withSpan(name, fn, attributes)` - Wrap async functions with spans
- `withSyncSpan(name, fn, attributes)` - Wrap sync functions with spans
- `addSpanAttributes(attributes)` - Add attributes to current span
- `setSpanStatus(status, message)` - Set span status

### Client-Side (`src/lib/client-tracer.ts`)

- `clientLogger.info/warn/error()` - Client-side logging
- `useComponentTracing(componentName)` - React component performance tracking
- `traceUserInteraction(type, elementInfo)` - Track user interactions
- `traceNavigation(from, to, type)` - Track navigation events
- `traceComponentError(componentName, error, errorInfo)` - Track React errors

## 🎯 Examples

### Example 1: Database Operation

```typescript
export async function fetchUser(userId: string) {
  return withSpan('database-fetch-user', async () => {
    try {
      logger.info('Fetching user from database', { userId });

      const user = await db.query('SELECT * FROM users WHERE id = $1', [userId]);

      logger.info('User fetched successfully', {
        'user.id': user.id,
        'user.email': user.email
      });

      return user;
    } catch (error) {
      logger.error('Database query failed', error, { userId });
      setSpanStatus(SpanStatusCode.ERROR, 'Database query failed');
      throw error;
    }
  }, {
    'db.operation': 'select',
    'db.table': 'users',
    'db.user_id': userId
  });
}
```

### Example 2: Form Submission

```typescript
export async function submitForm(formData: FormData) {
  return withSpan('form-submission', async () => {
    clientLogger.info('Form submission started', {
      'form.fields': Object.keys(formData)
    });

    try {
      // Validate
      const validation = await validateForm(formData);

      if (!validation.isValid) {
        setSpanStatus(SpanStatusCode.ERROR, 'Validation failed');
        return { error: 'Validation failed' };
      }

      // Submit
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      clientLogger.info('Form submitted successfully', {
        'response.status': response.status
      });

      return { success: true };
    } catch (error) {
      clientLogger.error('Form submission failed', error);
      setSpanStatus(SpanStatusCode.ERROR, 'Form submission failed');
      throw error;
    }
  });
}
```

### Example 3: Performance Monitoring

```typescript
export function monitorPerformance() {
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

      logger.info('Page load performance', {
        'perf.dns': navigation.domainLookupEnd - navigation.domainLookupStart,
        'perf.connection': navigation.connectEnd - navigation.connectStart,
        'perf.response': navigation.responseEnd - navigation.responseStart,
        'perf.dom': navigation.domContentLoadedEventEnd - navigation.responseEnd,
        'perf.load': navigation.loadEventEnd - navigation.loadEventStart,
        'perf.total': navigation.loadEventEnd - navigation.navigationStart
      });
    });
  }
}
```

## 🔍 Viewing Traces

### Development Console

Traces are exported to the console in development mode. Look for structured JSON output that includes:

```json
{
  "timestamp": "2024-01-01T00:00:00.000Z",
  "traceId": "abc123",
  "spanId": "def456",
  "traceState": "",
  "parentSpanId": "ghi789",
  "name": "operation-name",
  "kind": 0,
  "status": { "code": 1 },
  "attributes": {
    "custom.attribute": "value"
  },
  "events": []
}
```

### Browser Developer Tools

1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for log messages with `[CLIENT INFO/ERROR/WARN]` prefixes
4. Server-side traces appear in the terminal/server console

## 🧪 Testing

The setup includes automated tests that run in development mode. These tests:

- Verify basic tracing functionality
- Test error handling
- Demonstrate nested spans
- Validate API route tracing
- Test client-side logging

Tests run automatically 2 seconds after server startup in development mode.

## 📈 Best Practices

### 1. **Span Naming**
- Use descriptive, hierarchical names: `database-fetch-user`, `api-create-order`
- Include relevant identifiers: `process-payment-${orderId}`

### 2. **Attributes**
- Add meaningful attributes to spans
- Include identifiers, status codes, and measurements
- Use consistent naming: `user.id`, `http.status_code`, `db.duration_ms`

### 3. **Error Handling**
- Always set span status on errors: `setSpanStatus(SpanStatusCode.ERROR)`
- Log errors with context: `logger.error(message, error, attributes)`
- Include error details in attributes

### 4. **Performance**
- Use spans for operations > 10ms
- Avoid excessive attributes (keep under 20 per span)
- Use sampling for high-traffic applications

### 5. **Client-Side**
- Track user interactions and navigation
- Monitor component lifecycle events
- Log errors and performance metrics

## 🚦 Production Considerations

### Sampling
For production, consider implementing sampling to reduce overhead:

```typescript
// Configure sampling in otel.ts
const samplingRate = process.env.NODE_ENV === 'production' ? 0.1 : 1.0;
```

### Exporters
Replace console exporter with production-ready exporters:

```typescript
// Example: Jaeger exporter
import { JaegerExporter } from '@opentelemetry/exporter-jaeger';

// const jaegerExporter = new JaegerExporter({
//   endpoint: 'http://jaeger:14268/api/traces'
// });
```

### Environment Variables
Configure tracing behavior via environment variables:

```bash
OTEL_SERVICE_NAME=my-app
OTEL_EXPORTER_OTLP_ENDPOINT=https://api.honeycomb.io
OTEL_EXPORTER_OTLP_HEADERS=api-key=your-key
```

## 🔧 Troubleshooting

### Common Issues

1. **No traces appearing in console**
   - Check that OpenTelemetry is initialized in layout.tsx
   - Verify NODE_ENV is 'development'
   - Look for initialization errors in server logs

2. **Missing client-side traces**
   - Ensure 'use client' directive is present
   - Check browser console for JavaScript errors
   - Verify React component is properly imported

3. **Span hierarchy issues**
   - Use `withSpan` for proper parent-child relationships
   - Avoid mixing server and client contexts
   - Check for async/await usage

### Debug Mode

Enable verbose logging for debugging:

```typescript
// In otel.ts
export const otelSDK = new NodeSDK({
  // ... other config
  logLevel: 'DEBUG', // Add this for verbose logging
});
```

## 📚 Resources

- [OpenTelemetry JavaScript Documentation](https://opentelemetry.io/docs/instrumentation/js/)
- [Next.js Observability](https://nextjs.org/docs/app/building-your-application/optimizing/observability)
- [OpenTelemetry API Reference](https://open-telemetry.github.io/opentelemetry-js/)

---

🎉 **Happy Tracing!** Your application now has comprehensive observability built-in.