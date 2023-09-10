import React, { FC } from "react";

// css import
import styles from "./styles/SectionTitle.module.css";

// props type
type Props = {
  id: number,
  fill: boolean,
  text: string,
  align: string,
}


const SectionTitle: React.FC<Props> = ({ id, fill = false, text, align = 'left' }) => {
  return (
    <div className={`${styles.sectionTitle} ${styles[align]}`} key={id}>
      {fill ? (
        <h1 className={`${styles.title} ${styles.whiteText}`}>
          {text}
        </h1>
      ) : (
        <h1 className={`${styles.title} ${styles.blackText}`}>
          {text}
        </h1>
      )}
    </div>
  )
}
export default SectionTitle;