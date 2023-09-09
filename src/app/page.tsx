import MouseStalker from "./components/custom/MouseStalker";
import MainPage from "./pages";

// css import
import styles from "./styles/page.module.css"

export default function Home() {
  return (
    <main>
      <MouseStalker />
      <MainPage />
    </main>
  )
}
