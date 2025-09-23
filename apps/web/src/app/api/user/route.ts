import { NextRequest, NextResponse } from 'next/server';
import { withSpan, logger, setSpanStatus, SpanStatusCode } from '../../../lib/tracer';

async function simulateDatabaseQuery(userId: string): Promise<any> {
  return withSpan('database-query', async () => {
    logger.info('Simulating database query', { 'user.id': userId });

    // Simulate database delay
    await new Promise(resolve => setTimeout(resolve, 200));

    // Simulate some error for demonstration (every 5th request)
    if (Math.random() < 0.2) {
      throw new Error('Database connection failed');
    }

    return {
      id: userId,
      name: 'John Doe',
      email: 'john@example.com',
      createdAt: new Date().toISOString(),
    };
  }, {
    'db.operation': 'select',
    'db.table': 'users',
  });
}

async function validateUserInput(input: any): Promise<boolean> {
  return withSpan('input-validation', () => {
    logger.info('Validating user input', { 'input.keys': Object.keys(input) });

    // Simulate validation
    const isValid = input && typeof input === 'object';

    if (!isValid) {
      logger.warn('Invalid user input detected', { input });
    }

    return isValid;
  });
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('id');

  return withSpan('get-user', async () => {
    try {
      logger.info('User lookup requested', {
        'user.id': userId,
        'endpoint': '/api/user',
        'method': 'GET',
      });

      // Validate input
      const isValidInput = await validateUserInput({ userId });
      if (!isValidInput) {
        setSpanStatus(SpanStatusCode.ERROR, 'Invalid input');
        return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
      }

      // Simulate database query
      const user = await simulateDatabaseQuery(userId || 'default');

      logger.info('User lookup completed successfully', {
        'response.status': 200,
        'user.found': true,
        'user.id': user.id,
      });

      return NextResponse.json({ user });

    } catch (error) {
      logger.error('User lookup failed', error as Error, {
        'user.id': userId,
        'error.type': 'database_error',
      });

      setSpanStatus(SpanStatusCode.ERROR, 'Database query failed');
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
  }, {
    'http.method': 'GET',
    'http.route': '/api/user',
    'user.id': userId,
  });
}

export async function POST(request: NextRequest) {
  return withSpan('create-user', async () => {
    try {
      const body = await request.json();

      logger.info('User creation requested', {
        'endpoint': '/api/user',
        'method': 'POST',
        'request.size': JSON.stringify(body).length,
      });

      // Simulate validation
      const isValid = await validateUserInput(body);
      if (!isValid) {
        setSpanStatus(SpanStatusCode.ERROR, 'Invalid user data');
        return NextResponse.json({ error: 'Invalid user data' }, { status: 400 });
      }

      // Simulate user creation
      await withSpan('user-creation', async () => {
        await new Promise(resolve => setTimeout(resolve, 300));
      });

      logger.info('User created successfully', {
        'response.status': 201,
        'user.email': body.email,
      });

      return NextResponse.json(
        { message: 'User created successfully', userId: '123' },
        { status: 201 }
      );

    } catch (error) {
      logger.error('User creation failed', error as Error, {
        'error.type': 'validation_error',
      });

      setSpanStatus(SpanStatusCode.ERROR, 'User creation failed');
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
  }, {
    'http.method': 'POST',
    'http.route': '/api/user',
  });
}