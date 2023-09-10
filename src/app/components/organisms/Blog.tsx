import React, { FC } from "react";

// css import
import styles from "./styles/Blog.module.css";
import SectionTitle from "../atoms/SectionTitle";


const Blog: React.FC = () => {
  return (
    <div className={styles.blog} id="blog">
      <div className={styles.container}>
        <SectionTitle id={4} fill={false} text='BLOG' align='center' />
      </div>
    </div>
  )
}

export default Blog;