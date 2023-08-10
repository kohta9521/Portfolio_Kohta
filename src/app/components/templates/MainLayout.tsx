import React, { FC } from "react";

// css import
import styles from "./styles/MainLayout.module.css";
import Header from "../organisms/Header";
import Hero from "../organisms/Hero";
import Footer from "../organisms/Footer";
import Profile from "../organisms/Profile";


const MainLayout: React.FC = () => {
  return (
    <>
    <Header />
    <Hero />
    <Profile />
    </>
  )
}

export default MainLayout;