import React, { FC } from "react";

// css import
import styles from "./styles/MainLayout.module.css";
import Header from "../organisms/Header";
import Hero from "../organisms/Hero";
import Topic from "../organisms/Topic";
import About from "../organisms/About";


const MainLayout: React.FC = () => {
  return (
    <>
    <Header />
    <Hero />
    {/* newsとして入れたいデザイン的に少し合わないので当分実装しない */}
    {/* <Topic /> */}
    <About />
    </>
  )
}

export default MainLayout;