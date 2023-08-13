'use client'

import React, { FC, useRef, useEffect } from "react";

// css import
import styles from "./styles/Blog.module.css";
import Title from "../atoms/Title";
import BlogCard from "../molecules/BlogCard";


const Blog: React.FC = () => {
  const screenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    screenRef.current!.onwheel = ev  => {
      ev.preventDefault();

      let delta = (ev.deltaY / Math.abs(ev.deltaY)) * window.innerWidth;
      if (delta > 0) {
        delta += screenRef.current!.scrollLeft;
        delta = Math.floor(delta / window.innerWidth) * window.innerWidth;
      }else {
        delta += screenRef.current!.scrollLeft;
        delta = Math.ceil(delta / window.innerWidth) * window.innerWidth;
      }
      screenRef.current!.scrollLeft = delta;
    }
  }, []);
  return (
    <div className={styles.blog}>
      <Title id={0} idtext="blog" text="Blog" align="center" />
      <div ref={screenRef} className={styles.screen}>
        <div className={styles.container}>
          <div className={styles.page}>
            <BlogCard />
          </div>
          <div className={styles.page}>
            <div className={styles.text}>
              page 2
            </div>
          </div>
          <div className={styles.page}>
            <div className={styles.text}>
              page 3
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;