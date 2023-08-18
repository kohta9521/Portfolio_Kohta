'use client'
import React, { FC, useRef, useEffect, useState } from "react";

// css import
import styles from "./styles/Blog.module.css";
import Title from "../atoms/Title";


const Blog: React.FC = () => {

  return (
    <div className={styles.blog}>
      <Title id={0} idtext="blog" text="Blog" align="center" />
      <div className={styles.container}>
      <div className={styles.subText}>
        I am running a blog site where I summarize my daily studies and the parts of the site that I have been stuck on. The contents range from front-end to Web 3.0 such as Solidity. I also introduce some of my favorite gadgets.
        If you want to know more about my technical skills and ability to communicate, please feel free to take a look.
      </div>
      <div className={styles.imgBox}>
      </div>
      </div>
    </div>
  )
}

export default Blog;