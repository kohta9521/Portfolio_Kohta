'use client'
import React, { FC, useRef, useEffect, useState } from "react";

// css import
import styles from "./styles/Blog.module.css";
import Title from "../atoms/Title";
import BlogCard from "../molecules/BlogCard";


const Blog: React.FC = () => {
  const screenRef = useRef<HTMLDivElement>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  // マウスが要素の最後までスクロールされたかどうかを管理するステート
  const [reachedEnd, setReachedEnd] = useState(false);

  const handleMouseEnter = () => {
      setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
      setIsMouseOver(false);
  };

  const handleWheel = (ev: WheelEvent) => {
      ev.preventDefault();

      if (!isMouseOver) {
          return;
      }

      // スクロール幅を調べ、最後までスクロールされた場合 reachedEnd を true に設定
      if (screenRef.current!.scrollLeft >= screenRef.current!.scrollWidth - screenRef.current!.clientWidth) {
          setReachedEnd(true);
      } else {
          setReachedEnd(false);
      }

      // reachedEnd が true の場合は縦スクロールに切り替える
      if (reachedEnd) {
          // ここに縦スクロールのコードを追加
      } else {
          // 横スクロールの処理を続行
          let delta = (ev.deltaY / Math.abs(ev.deltaY)) * window.innerWidth;
          if (delta > 0) {
              delta += screenRef.current!.scrollLeft;
              delta = Math.floor(delta / window.innerWidth) * window.innerWidth;
          } else {
              delta += screenRef.current!.scrollLeft;
              delta = Math.ceil(delta / window.innerWidth) * window.innerWidth;
          }
          screenRef.current!.scrollLeft = delta;
      }
  };

  useEffect(() => {
      screenRef.current!.addEventListener('mouseenter', handleMouseEnter);
      screenRef.current!.addEventListener('mouseleave', handleMouseLeave);
      screenRef.current!.addEventListener('wheel', handleWheel);

      return () => {
          screenRef.current!.removeEventListener('mouseenter', handleMouseEnter);
          screenRef.current!.removeEventListener('mouseleave', handleMouseLeave);
          screenRef.current!.removeEventListener('wheel', handleWheel);
      };
  }, [isMouseOver, reachedEnd]);

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
            <BlogCard />
            </div>
          </div>
          <div className={styles.page}>
            <div className={styles.text}>
            <BlogCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;