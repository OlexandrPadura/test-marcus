import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Sport | Posts',
  description: 'Sport news',
};

export default function Layout({ children }: PropsWithChildren) {
  return <div className='my-5 flex flex-co flex-1 h-full'>{children}</div>;
}
