import React, { FC } from 'react';

// css import
import styles from './styles/MainLayout.module.css';

// components import
import Header from '../organisms/Header';
import Hero from '../organisms/Hero';
import About from '../organisms/About';
import Career from '../organisms/Career';
import Work from '../organisms/Work';
import Portfolio from '../organisms/Portfolio';
import Blog from '../organisms/Blog';
import Contact from '../organisms/Contact';
import Footer from '../organisms/Footer';

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      {/* newsとして入れたいデザイン的に少し合わないので当分実装しない */}
      {/* <Topic /> */}
      <About />
      <Career />
      {/*
    <Work />
    <Portfolio />
    <Blog />
    <Contact />
    <Footer /> */}
    </>
  );
};

export default MainLayout;
