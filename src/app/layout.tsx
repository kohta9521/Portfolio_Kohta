import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Html, Head, Main, NextScript } from 'next/document';
import { FC } from 'react';

// css import
import styles from  "./styles/page.module.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kohta Engineering Portfolio',
  description: 'このサイトでは',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={styles.html}>
      <body>{children}</body>
    </html>
  )
}
