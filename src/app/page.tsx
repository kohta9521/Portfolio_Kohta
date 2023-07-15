import Image from 'next/image'
import styles from "../styles/page.module.css";
import MainLayout from '@/layouts/Main/MainLayout';

export default function Home() {
  return (
    <main className={styles.main}>
        <MainLayout />
    </main>
  )
}
