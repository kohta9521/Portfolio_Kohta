import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Kohta Engineer Portfolio | 河内光太 エンジニア ポートフォリオサイト',
    description:
        'こちらのサイトではエンジニアとして、またDJ・動画編集としての私の活動をご覧いただけます。',
    keywords:
        '河内, 光太, 河内光太, Kohta, kohta, Kochi, kochi, Kohta Kochi, ポートフォリオ, エンジニア, DJ, 動画編集',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='ja'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
