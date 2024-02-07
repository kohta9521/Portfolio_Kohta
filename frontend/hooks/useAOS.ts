'use client';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // アニメーションの持続時間
      once: true, // アニメーションを一度だけ実行する
    });
  }, []);
};

export default useAOS;
