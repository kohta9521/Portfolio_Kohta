import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// css import
import styles from  "./styles/page.module.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
