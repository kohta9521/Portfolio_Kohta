import React, { FC } from "react";

// css import
import styles from "./styles/Work.module.css";
import SectionTitle from "../atoms/SectionTitle";


const Work: React.FC = () => {
  return (
    <div className={styles.work} id="work">
      <div className={styles.container}>
        <SectionTitle id={3} fill={true} text='WORK' align='center' />
      </div>
    </div>
  )
}

export default Work;