import type React from 'react';
import './globals.css';
import { Inter, Merriweather } from 'next/font/google';
import { ToastProvider } from '@/components/ui/toast';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
});

export const metadata = {
  title: 'Ubuntu African Resources - Sustainable Mineral Trading',
  description:
    'Ubuntu African Resources is a leading commodity trading company specializing in minerals, connecting industries with essential energy and industrial minerals through responsible and efficient trade.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${merriweather.variable} font-sans`}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
