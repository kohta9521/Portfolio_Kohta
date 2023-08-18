import React, { FC } from "react";

// css import
import styles from "./styles/MainLayout.module.css";
import Header from "../organisms/Header";
import Hero from "../organisms/Hero";
import Footer from "../organisms/Footer";
import Profile from "../organisms/Profile";
import Blog from "../organisms/Blog";
import BesideScroll from "../organisms/BesideScroll";
import Work from "../organisms/Work";


const MainLayout: React.FC = () => {
  return (
    <>
    <Header />
    <Hero />
    <Profile />
    <Blog />
    <Work />
    <Footer />
    </>
  )
}

export default MainLayout;