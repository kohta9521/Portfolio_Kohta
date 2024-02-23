'use client';
import { BarChart } from '@mui/x-charts';
import React from 'react';

import useAOS from '@/hooks/useAOS';

import SectionTitle from '../molecules/SectionTitle';

import styles from './styles/Skill.module.scss';


const chartSetting = {
  xAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 500,
  height: 400,
};

const valueFormatter = (value: number) => `${value}点`;

// samle data
const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'HTML',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'CSS/SASS',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'TailwindCSS',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'JavaScript',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'TypeScript',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'React',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'Next.js',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: 'sample',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: 'Sept',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'Oct',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'Nov',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: 'Dec',
  },
];

const Skill = () => {
  useAOS();
  return (
    <div className={styles.skill}>
      <div className={styles.container}>
        <SectionTitle id={3} idName="skill" number="03" jaTitle="保有技術" enTitle="Skill Set" color="white" />
        <div className={styles.mainContent}>
          <div className={styles.desc} data-aos="fade-up">
            <p className={styles.mainText}>
              私の保有スキル一覧です。プログラミング言語から開発ツールの使用頻度・レベル感をご覧いただけます。
            </p>
            <div className={styles.flexBox}>
              <BarChart
                dataset={dataset}
                yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter, color: '#ff00c3' }]}
                layout="horizontal"
                {...chartSetting}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
