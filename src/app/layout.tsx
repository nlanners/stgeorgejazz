import type { Metadata } from 'next';

import 'src/app/globals.css';
import { Footer } from 'src/components/Footer';
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
      <body>
        <Header />
        <main className="px-16">{children}</main>
      </body>
      <Footer />
    </html>
  );
}
