import Header from "@/layouts/header/Header";
import styles from "../styles/page.module.css";
import MainLayout from '@/layouts/Main/MainLayout';
import Sidebar from "@/layouts/sidebar/Sidebar";

export default function Home() {
  return (
    <main className={styles.main}>
        <Header />
        <Sidebar />
        <MainLayout />
    </main>
  )
}
