import '@/styles/globals.css';
import '@/styles/layout.css';
import {cn} from '@/lib/utils';
import {Inter} from 'next/font/google';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

import {Toaster} from '@/components/ui/Toast';

const inter = Inter({subsets: ['latin']});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={cn('bg-white text-slate-900 antialiased', inter.className)}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className="min-h-screen bg-slate-100 dark:bg-slate-900 antialiased">
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <Toaster position="bottom-right" />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
