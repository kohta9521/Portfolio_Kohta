import MouseStalker from "./components/custom/MouseStalker";
import MainPage from "./pages";

// css import
import styles from "./styles/page.module.css"


// loading
import PreLoader from "./components/custom/PreLoader";


export default function Home() {
  return (
    <main>
            <PreLoader />
      <MouseStalker />
      <MainPage />
    </main>
  )
}
