import { useSpring } from 'react-spring';
import { Mouse, useMouseMove, useMouseOver, useMouseOut } from './mouseEvent';

export type SpringConfig = {
  frequency: number;
  damping: number;
};
const useMouseStalker = (
  initMouse: Mouse,
  mouseConfig: SpringConfig,
  times: number,
) => {
  const [springStyles, setSpringStyles] = useSpring(() => ({
    to: initMouse,
    config: mouseConfig,
  }));

  useMouseMove(initMouse, setSpringStyles, times);
  useMouseOver(initMouse, setSpringStyles, times, 'a');
  useMouseOut(initMouse, setSpringStyles, times, 'a');

  return springStyles;
};

export default useMouseStalker;
