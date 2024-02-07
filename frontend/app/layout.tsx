import { Inter } from 'next/font/google';

import type { Metadata } from 'next';
import '../styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kohta Engineer Portfolio Site | Kohtaのポートフォリオサイト',
  description:
    'kohtaのエンジニアとしてのポートフォリオサイトです。普段の私のフリーランスとしての仕事内容・個人開発を行っているアプリなどについて知ることができます。',
  keywords:
    '大学生, エンジニア, ポートフォリオ, プログラミング, IT業界, 開発者, フリーランス, キャリア, 技術スタック, プロジェクト',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
