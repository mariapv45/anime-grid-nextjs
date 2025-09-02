import type { Metadata } from "next";
import { geistSans, geistMono } from '@/ui/fonts';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    template: '%s | Anime Grid',
    default: 'Anime Grid',
  },
  description: 'Anime Grid',
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
