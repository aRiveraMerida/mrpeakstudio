import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mr.Peak Studio | Digital Solutions',
  description: 'Expertos en consultoría de IA, SEO e implementación digital',
  keywords: ['consultoría', 'IA', 'SEO', 'implementación digital', 'Mr.Peak Studio'],
  authors: [{ name: 'Mr.Peak Studio' }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://mrpeakstudio.com',
    title: 'Mr.Peak Studio | Digital Solutions',
    description: 'Expertos en consultoría de IA, SEO e implementación digital',
    siteName: 'Mr.Peak Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mr.Peak Studio',
    description: 'Expertos en consultoría de IA, SEO e implementación digital',
    creator: '@mrpeakstudio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}