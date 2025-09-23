import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Scilent One - Digital Project Template',
  description:
    'A modern web application template built with Next.js, React, TypeScript, Tailwind CSS, and Turborepo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <div className='min-h-dvh bg-background text-foreground'>
            <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
              <div className='font-semibold'>Scilent One</div>
              {/* Simple header with theme toggle */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className='flex items-center gap-2'>
                <a href='/' className='text-sm text-muted-foreground hover:underline'>Home</a>
                <a href='/styles' className='text-sm text-muted-foreground hover:underline'>Styles</a>
                <a href='/components' className='text-sm text-muted-foreground hover:underline'>Components</a>
                <ThemeToggle />
              </div>
            </div>
            <div className='container mx-auto px-4 pb-12'>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
