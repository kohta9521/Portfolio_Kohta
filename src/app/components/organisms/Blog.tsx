'use client'
import React, { FC, useRef, useEffect, useState } from "react";

// css import
import styles from "./styles/Blog.module.css";
import Title from "../atoms/Title";
import BlogCard from "../molecules/BlogCard";


const Blog: React.FC = () => {

  return (
    <div className={styles.blog}>
      <Title id={0} idtext="blog" text="Blog" align="center" />
    </div>
  )
}

export default Blog;