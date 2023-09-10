import React, { FC } from "react";

// css import
import styles from "./styles/Career.module.css";
import SectionTitle from "../atoms/SectionTitle";


const Career: React.FC = () => {
  return (
    <div className={styles.career} id="career">
      <div className={styles.container}>
        <SectionTitle id={3} fill={true} text='MY' align='right' />
        <SectionTitle id={4} fill={false} text='PROFILE AND CAREER' align='right' />
      </div>
    </div>
  )
}

export default Career;