import type { Metadata } from 'next';

import 'src/app/globals.css';
import { Header } from 'src/components/Header';

export const metadata: Metadata = {
  title: 'St. George Jazz',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
