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
  frequency: 0.2,
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