import '@/ui/globals.css';
import type { Metadata } from "next";
import { geistSans, geistMono } from '@/ui/fonts';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    template: '%s | Leonardo.AI Web Challenge',
    default: 'Leonardo.AI Web Challenge',
  },
  description: 'Leonardo.AI Web Team Coding Challenge: Submission by Maria Vargas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
