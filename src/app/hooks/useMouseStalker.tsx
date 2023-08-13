import { useSpring } from 'react-spring';
import { Mouse, useMouseMove } from './mouseEvent';

export type SpringConfig = {
  frequency: number;
  damping: number;
};

const useMouseStalker = (initMouse: Mouse, mouseConfig: SpringConfig) => {
  const [springStyles, setSpringStyles] = useSpring(() => ({
    to: initMouse,
    config: mouseConfig,
  }));

  useMouseMove(initMouse, setSpringStyles);

  return springStyles;
};

export default useMouseStalker;
