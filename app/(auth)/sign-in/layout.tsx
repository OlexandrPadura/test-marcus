import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Sport | Sign In',
  description: 'Generated by create next app',
};

export default function Layout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
