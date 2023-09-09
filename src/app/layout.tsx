import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// dark mode
import Providers from "./components/custom/Providers";
import ThemeButton from "./components/custom/ThemeButton";

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
    <html lang="ja" suppressHydrationWarning className={styles.html}>
      <body>
        {/* <Providers>
          <ThemeButton /> */}
          {children}
        {/* </Providers> */}
      </body>
    </html>
  );
}
