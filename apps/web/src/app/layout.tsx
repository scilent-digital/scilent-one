import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@scilent-one/ui';

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          {/* Sticky navbar with transparent blur effect */}
          <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60'>
            <div className='container mx-auto px-4 flex h-14 items-center justify-between'>
              <Link
                href='/'
                className='font-semibold tracking-tight hover:opacity-80 transition-opacity'
              >
                Scilent One
              </Link>

              <div className='flex items-center gap-2'>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        asChild
                      >
                        <Link href='/styles'>Styles</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        asChild
                      >
                        <Link href='/components'>Components</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        asChild
                      >
                        <Link href='/db'>Database</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <ThemeToggle />
              </div>
            </div>
          </header>
          <main className='container mx-auto min-h-screen w-full overflow-y-auto'>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
