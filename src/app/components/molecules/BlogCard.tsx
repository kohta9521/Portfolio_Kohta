import React, { FC } from "react";

// css import
import styles from "./styles/BlogCard.module.css";


const BlogCard: React.FC = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.imgBox}>
        <img src="/img/profilejpg" alt="imgArea" />
      </div>
      <div className={styles.textBox}>
        <h3 className={styles.title}>
          titletitltitle
        </h3>
        <div className={styles.tagArea}>
          tag area
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet voluptates ad eius vero quasi, sapiente delectus quo explicabo saepe rem!
        </p>
      </div>
    </div>
  )
}

export default BlogCard;