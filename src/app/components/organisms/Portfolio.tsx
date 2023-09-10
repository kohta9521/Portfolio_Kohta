import React, { FC } from "react";

// css import
import styles from "./styles/Portfolio.module.css";
import SectionTitle from "../atoms/SectionTitle";


const Portfolio: React.FC = () => {
  return (
    <div className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <SectionTitle id={4} fill={false} text='PORTFOLIO' align='left' />
      </div>
    </div>
  )
}

export default Portfolio;