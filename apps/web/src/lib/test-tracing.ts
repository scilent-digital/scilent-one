/**
 * Test script to verify OpenTelemetry tracing is working correctly
 *
 * Run this in development to see traces in the console
 */

import { withSpan, logger } from './tracer';
import { exampleDatabaseTracing, exampleApiRouteTracing } from './examples';

export async function runTracingTests() {
  console.log('🧪 Running OpenTelemetry tracing tests...');

  try {
    // Test 1: Basic tracing
    console.log('\n📋 Test 1: Basic tracing');
    const result1 = await withSpan('test-basic-tracing', async () => {
      logger.info('Testing basic tracing functionality');
      await new Promise(resolve => setTimeout(resolve, 50));
      return 'basic-tracing-works';
    }, {
      'test.type': 'basic',
      'test.category': 'tracing'
    });

    console.log('✅ Basic tracing result:', result1);

    // Test 2: Database simulation
    console.log('\n📋 Test 2: Database tracing');
    const user = await exampleDatabaseTracing('test-user-123');
    console.log('✅ Database tracing result:', user);

    // Test 3: API route simulation
    console.log('\n📋 Test 3: API route tracing');
    const apiResult = await exampleApiRouteTracing({
      email: 'test@example.com',
      name: 'Test User'
    });
    console.log('✅ API route tracing result:', apiResult);

    // Test 4: Error handling
    console.log('\n📋 Test 4: Error handling');
    try {
      await withSpan('test-error-handling', async () => {
        logger.info('Testing error handling');
        await new Promise(resolve => setTimeout(resolve, 50));
        throw new Error('This is a test error');
      });
    } catch (error) {
      logger.error('Caught test error', error as Error);
      console.log('✅ Error handling works correctly');
    }

    // Test 5: Nested spans
    console.log('\n📋 Test 5: Nested spans');
    await withSpan('test-nested-spans', async () => {
      logger.info('Starting nested span test');

      await withSpan('inner-span-1', async () => {
        logger.info('Inner span 1');
        await new Promise(resolve => setTimeout(resolve, 30));
      });

      await withSpan('inner-span-2', async () => {
        logger.info('Inner span 2');
        await new Promise(resolve => setTimeout(resolve, 30));
      });

      logger.info('Nested span test completed');
    });

    console.log('\n🎉 All tracing tests completed successfully!');
    console.log('💡 Check your console output above to see the OpenTelemetry spans.');

  } catch (error) {
    console.error('❌ Tracing test failed:', error);
  }
}

// Auto-run tests in development
if (typeof window === 'undefined' && process.env.NODE_ENV === 'development') {
  // Only run on server-side in development
  setTimeout(() => {
    console.log('🚀 Starting OpenTelemetry tracing tests...');
    runTracingTests();
  }, 2000); // Wait 2 seconds for OpenTelemetry to initialize
}