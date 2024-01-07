import '@/styles/globals.css';
import { Raleway } from 'next/font/google';
import Client from '@/components/client';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'Campustalkative',
  description: 'Connect, Grow, Succeed and Collaborate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Toaster />
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
