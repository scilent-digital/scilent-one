import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: 'noindex',
};

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>Page Not Found</h1>
      <p className='text-lg text-muted-foreground'>
        The page you are looking for does not exist.
      </p>
      <Link href='/'>Go back to the home page</Link>
    </div>
  );
}
