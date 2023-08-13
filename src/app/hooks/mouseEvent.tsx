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

const useMouseMove = (initMouse: Mouse, setSpringStyles: SpringRef<Mouse>) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      setSpringStyles.start({
        opacity: 100,
        // initMouse.* / 2 は真ん中合わせ
        top: e.y - initMouse.height / 2,
        left: e.x - initMouse.width / 2,
      });
    };

    window.addEventListener('mousemove', listener);

    // EventListenerを追加したら、クリーンアップ関数で忘れずにremoveする(戒め
    return () => {
      window.removeEventListener('mousemove', listener);
    };
  }, [setSpringStyles, initMouse]);
};

export { useMouseMove };
