import Link from 'next/link';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@repo/ui';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center'>
          <h1 className='text-6xl font-bold text-gray-900 dark:text-white mb-4'>
            Scilent One
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 mb-8'>
            Digital Project Template with Design System
          </p>

          <Card className="max-w-md mx-auto mb-8">
            <CardHeader>
              <CardTitle>✅ Integration Complete</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-gray-700 dark:text-gray-300 text-left'>
                Next.js + React + TypeScript + Tailwind CSS + Turborepo + Design System
              </p>
            </CardContent>
          </Card>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link href='/styles'>
              <Button className='px-6 py-3'>
                🎨 View Styles Demo
              </Button>
            </Link>
            <Link href='/components'>
              <Button variant="outline" className='px-6 py-3'>
                🧩 View Components Demo
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>🎨 Design System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Shared design tokens, themes, and utilities for consistent styling.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🧩 UI Components</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Reusable React components with TypeScript support and accessibility.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>⚡ Monorepo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Efficient package management with shared tooling and caching.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
