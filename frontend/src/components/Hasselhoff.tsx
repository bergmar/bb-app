import { useLocation } from 'react-router-dom';
import imgHasselhoff from '../assets/hassel.webp';
import { isStartPage } from '../utils';

function Hasselhoff() {
  const isStart = isStartPage(useLocation());
  return (
    <img
      className={isStart ? 'w-[70vw] sm:w-[40vh]' : 'w-[36vw] sm:w-[30vh]'}
      src={imgHasselhoff}
      alt="A smiling David Hasselhoff in bading suit."
    />
  );
}
export default Hasselhoff;
