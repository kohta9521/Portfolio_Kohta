import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// css import
import styles from  "./styles/page.module.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kohta Portfolio Site | エンジニアポートフォリオサイト',
  description: 'こちらのサイトではエンジニアとしての私の活動をご覧いただけます。',
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
