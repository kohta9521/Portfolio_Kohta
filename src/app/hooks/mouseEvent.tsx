'use client'
import { useEffect } from 'react';
import { SpringRef } from 'react-spring';

export type Mouse = {
  width: number;
  height: number;
  borderRadius: number;
  opacity: number;
  top: number;
  left: number;
};

let isOver: boolean | undefined = undefined;

const useMouseMove = (initMouse: Mouse, setSpringStyles: SpringRef<Mouse>, times: number) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
    if (isOver) {
      setSpringStyles.start({
        opacity: 100,
        // 大きくした分だけ割る値も小さくする
        top: e.y - initMouse.height / (2 / times),
        left: e.x - initMouse.width / (2 / times),
      });
      } else {
      setSpringStyles.start({
        opacity: 100,
        // initMouse.* / 2 は真ん中合わせ
        top: e.y - initMouse.height / 2,
        left: e.x - initMouse.width / 2,
      });
    }
    };

    window.addEventListener('mousemove', listener);

    // EventListenerを追加したら、クリーンアップ関数で忘れずにremoveする(戒め
    return () => {
      window.removeEventListener('mousemove', listener);
    };
  }, [setSpringStyles, initMouse, times]);
};


 const useMouseOver = (initMouse: Mouse, setSpringStyles: SpringRef<Mouse>, times: number, tag: string) => {
     useEffect(() => {
       const elements = document.querySelectorAll(tag);
       const listener = () => {
        setSpringStyles.start({
           width: initMouse.width * times,
           height: initMouse.height * times,
           borderRadius: initMouse.borderRadius * times,
         });
   
         isOver = true;
       };
  
       elements.forEach((element) => {
        element.addEventListener('mouseover', listener);
       });
   
       return () => {
         elements.forEach((element) => {
           element.removeEventListener('mouseover', listener);
         });
       };
     }, [initMouse, setSpringStyles, times, tag]);
   };
   
   const useMouseOut = (initMouse: Mouse, setSpringStyles: SpringRef<Mouse>, times: number, tag: string) => {
     useEffect(() => {
       const elements = document.querySelectorAll(tag);
      const listener = () => {
         setSpringStyles.start({
           width: initMouse.width,
           height: initMouse.height,
           borderRadius: initMouse.borderRadius,
         });
   
         isOver = false;
       };
   
       elements.forEach((element) => {
         element.addEventListener('mouseout', listener);
      });
   
       return () => {
         elements.forEach((element) => {
           element.removeEventListener('mouseout', listener);
         });
       };
     }, [initMouse, setSpringStyles, times, tag]);
   };

export { useMouseMove, useMouseOver, useMouseOut };
