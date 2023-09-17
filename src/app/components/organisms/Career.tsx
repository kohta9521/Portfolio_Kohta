import React, { FC } from "react";

// css import
import styles from "./styles/Career.module.css";
import SectionTitle from "../atoms/SectionTitle";
import CareerCard from "../molecules/CareerCard";


const Career: React.FC = () => {
  return (
    <div className={styles.career} id="career">
      <div className={styles.container}>
        <SectionTitle id={3} fill={true} text='My' align='left' />
        <SectionTitle id={3} fill={false} text='CAREER' align='left' />
        <CareerCard id={1} flexPosition={true} />
        <CareerCard id={2} flexPosition={false} />
        <CareerCard id={3} flexPosition={true} />
      </div>
    </div>
  )
}

export default Career;