import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'nefleia',
  description: 'Portfolio site of nefleia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} antialiased`}>
      <body>
        <div className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-4">
          <header>
            <Header />
          </header>
          <main className="flex-1">{children}</main>
          <footer className='my-4 flex justify-center'>
            &copy; 2025 nefleia
          </footer>
        </div>
      </body>
    </html>
  );
}
