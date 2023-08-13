'use client'
import { FC, CSSProperties } from 'react';
import { animated } from 'react-spring';
import useMouseStalker from '../../hooks/useMouseStalker';

const initMouse = {
  width: 16,
  height: 16,
  borderRadius: 8,
  opacity: 0,
  top: 0,
  left: 0,
};

const springConfig = {
  // 変化の速さ. 大きくすると遅くなる.
  frequency: 0.2,
  // どのタイミングで減速するか. 大きくすると減速の開始が速くなる.
  damping: 2,
};

const mouseStyles: CSSProperties = {
  pointerEvents: 'none',
  position: 'fixed',
  zIndex: 100,
   backgroundColor: 'white',
  mixBlendMode: 'difference',
};

const MouseStalker: FC = () => {
  const springStyles = useMouseStalker(initMouse, springConfig, 3);

  return (
    <animated.div
      style={{
        ...mouseStyles,
        ...springStyles,
      }}
    />
  );
};

export default MouseStalker;
