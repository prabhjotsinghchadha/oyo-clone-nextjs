import '../styles/global.css';

import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
