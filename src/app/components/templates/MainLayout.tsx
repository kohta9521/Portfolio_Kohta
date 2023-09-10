import React, { FC } from "react";

// css import
import styles from "./styles/MainLayout.module.css";
import Header from "../organisms/Header";
import Hero from "../organisms/Hero";


const MainLayout: React.FC = () => {
  return (
    <>
    <Header />
    <Hero />
    </>
  )
}

export default MainLayout;