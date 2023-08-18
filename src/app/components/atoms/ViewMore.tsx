import React, { FC } from "react";

// css import
import styles from "./styles/ViewMore.module.css";


// props
type Props = {
  id: number;
  link: string;
}


const ViewMore: React.FC<Props> = ({ id, link }) => {
  return (
    <div className={styles.button} key={id}>
      <a className={styles.link} href={link}>
        View More
      </a>
    </div>
  )
}

export default ViewMore;