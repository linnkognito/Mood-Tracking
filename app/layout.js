import { Reddit_Sans } from 'next/font/google';
import './globals.css';

const redditSans = Reddit_Sans({
  variable: '--font-reddit-sans',
  display: 'swap',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Mood Tracking',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${redditSans.variable}`}>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
