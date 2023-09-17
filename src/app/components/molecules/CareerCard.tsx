import React, { FC } from 'react';

// css import
import styles from './styles/CareerCard.module.css';

// components import

// propt type
type Props = {
  id: number;
  flexPosition?: boolean;
  // true: 左に文字（１stと同じ配列）
};

const CareerCard: React.FC<Props> = ({ id, flexPosition = true }) => {
  return (
    <div className={styles.card}>
      {flexPosition ? (
        <div className={styles.container}>
          <div className={styles.textBox}>
            <div className={styles.titleFlex}>
              <h1 className={styles.title}>1st</h1>
              <p className={styles.date}>2022/1~</p>
            </div>
            <p className={styles.mainText}>
              He is a senior in high school. He started learning
              HTML/CSS/JavaScript through Progate, which was introduced to him
              by a friend. He was impressed to learn that he could create
              websites that he usually viewed on his own computer, and that he
              could create things even with a liberal arts background if he
              studied hard enough. He was hooked.
            </p>
          </div>
          <div className={styles.imgBox}>
            <img className={styles.img} src="/img/hero.jpg" alt="" />
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.imgBox}>
            <img className={styles.img} src="/img/hero.jpg" alt="" />
          </div>
          <div className={styles.textBox}>
            <div className={styles.titleFlex}>
              <h1 className={styles.title}>1st</h1>
              <p className={styles.date}>2022/1~</p>
            </div>
            <p className={styles.mainText}>
              He is a senior in high school. He started learning
              HTML/CSS/JavaScript through Progate, which was introduced to him
              by a friend. He was impressed to learn that he could create
              websites that he usually viewed on his own computer, and that he
              could create things even with a liberal arts background if he
              studied hard enough. He was hooked.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerCard;
