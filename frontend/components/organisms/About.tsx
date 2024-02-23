'use client';

import Image from 'next/image';
import SectionTitle from '../molecules/SectionTitle';
import styles from './styles/About.module.scss';

import useAOS from '@/hooks/useAOS';

const About = () => {
  useAOS();
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <SectionTitle id={2} idName="about" number="02" jaTitle="私について" enTitle="ABOUT" color="white" />
        <div className={styles.mainContent}>
          <div className={styles.leftBox} data-aos="fade-up">
            <p className={styles.enName}>kochi kohta</p>
            <h1 className={styles.jaName}>河内光太</h1>
            <p className={styles.company}>
              - 学習院大学 法学部法学科学部2年生
              <br />
              - Simple株式会社 Dev Team
              <br />- 株式会社HOKULEA Engineer
            </p>
            <p className={styles.desc}>
              大学1年生の夏よりプログラミングを独学で学び始め楽しさから没頭。
              将来エンジニアになるべく日々勉強中。大学では法学を学びつつ、エンジニアとしてのスキルも磨いている。
              専門はフロントエンドだがモバイル・バックエンドも勉強中。大学内で使用されるサービスなどを開発・運営を行っている。
              現在はSimple株式会社・株式会社HOKULEAでエンジニアとして働きつつフリーランスエンジニアとしても活動中。
              大学生エンジニア集団Enter代表・実践特化型AI•ソフトウェア開発 学生団体 SpecTech運営メンバー
            </p>
          </div>
          <div className={styles.rightBox} data-aos="fade-up">
            <Image className={styles.image} src={'/images/profile.jpeg'} width={400} height={500} alt="profile image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
