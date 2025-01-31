import { Inter } from 'next/font/google';

import { Footer, Header, Providers } from 'src/components';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sport',
  description: 'Sport News',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
