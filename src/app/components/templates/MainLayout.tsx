import React, { FC } from "react";

// css import
import styles from "./styles/MainLayout.module.css";
import Header from "../organisms/Header";
import Hero from "../organisms/Hero";
import Topic from "../organisms/Topic";


const MainLayout: React.FC = () => {
  return (
    <>
    <Header />
    <Hero />
    <Topic />
    </>
  )
}

export default MainLayout;