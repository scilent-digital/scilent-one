import { NextResponse } from 'next/server';
import { withSpan, logger } from '../../../lib/tracer';

export async function GET() {
  return withSpan('health-check', async () => {
    logger.info('Health check requested', {
      'endpoint': '/api/health',
      'method': 'GET',
      'user-agent': 'health-check',
    });

    // Simulate some work
    await new Promise(resolve => setTimeout(resolve, 100));

    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: '1.0.0',
    };

    logger.info('Health check completed successfully', {
      'response.status': 200,
      'response.size': JSON.stringify(healthData).length,
    });

    return NextResponse.json(healthData);
  }, {
    'http.method': 'GET',
    'http.route': '/api/health',
  });
}