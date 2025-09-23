'use client';

import { useState, useEffect } from 'react';
import { clientLogger, useComponentTracing, traceUserInteraction } from '../lib/client-tracer';

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { logRender } = useComponentTracing('HomePage');

  // Log component mount
  useEffect(() => {
    logRender('mount');
    clientLogger.info('Home page loaded', {
      'page.path': '/',
      'page.title': 'Scilent One Home',
    });

    return () => {
      logRender('unmount');
      clientLogger.info('Home page unmounted');
    };
  }, [logRender]);

  const handleButtonClick = async () => {
    traceUserInteraction('button_click', {
      tagName: 'button',
      id: 'demo-button',
      className: 'demo-button',
    });

    setIsLoading(true);
    setClickCount(prev => prev + 1);

    clientLogger.info('Demo button clicked', {
      'interaction.count': clickCount + 1,
      'button.action': 'increment_counter',
    });

    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 500));

    clientLogger.info('Demo operation completed', {
      'operation.duration_ms': 500,
      'operation.result': 'success',
    });

    setIsLoading(false);
  };

  const handleApiCall = async () => {
    traceUserInteraction('button_click', {
      tagName: 'button',
      id: 'api-button',
      className: 'api-button',
    });

    setIsLoading(true);
    clientLogger.info('API call initiated', {
      'api.endpoint': '/api/health',
      'api.method': 'GET',
    });

    try {
      const response = await fetch('/api/health');
      const data = await response.json();

      clientLogger.info('API call successful', {
        'api.response_status': response.status,
        'api.response_time_ms': Date.now(),
        'api.response_size': JSON.stringify(data).length,
      });

      // Show success message (in a real app, you'd update state)
      alert(`API Health Check: ${data.status} (${data.uptime.toFixed(2)}s uptime)`);

    } catch (error) {
      clientLogger.error('API call failed', error as Error, {
        'api.endpoint': '/api/health',
        'api.error': 'network_error',
      });
    }

    setIsLoading(false);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center'>
          <h1 className='text-6xl font-bold text-gray-900 dark:text-white mb-4'>
            Scilent One
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 mb-8'>
            Digital Project Template with OpenTelemetry
          </p>

          <div className='space-y-4'>
            <div className='inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg'>
              <span className='text-green-500 mr-2'>✓</span>
              <span className='text-gray-700 dark:text-gray-300'>
                Next.js + React + TypeScript + Tailwind CSS + OpenTelemetry
              </span>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center mt-8'>
              <button
                id='demo-button'
                className='demo-button px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50'
                onClick={handleButtonClick}
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : `Click Me! (${clickCount})`}
              </button>

              <button
                id='api-button'
                className='api-button px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50'
                onClick={handleApiCall}
                disabled={isLoading}
              >
                {isLoading ? 'Calling API...' : 'Test API Health'}
              </button>
            </div>

            <div className='mt-8 text-sm text-gray-500 dark:text-gray-400'>
              <p>Open your browser console to see OpenTelemetry traces!</p>
              <p>Try clicking the buttons above to see client-side tracing in action.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
