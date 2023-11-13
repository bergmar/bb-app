import LogotypeBig from './LogotypeBig';
import BigRedBorder from './BigRedBorder';
import Hasselhoff from './Hasselhoff';
import clsx from 'clsx';
import SmallRedBorder from './SmallRedBorder';
import LogotypeSmall from './LogotypeSmall';
import { isStartPage } from '../utils';
import { useLocation } from 'react-router-dom';

function Header() {
  const isStart = isStartPage(useLocation());
  return (
    <>
      <header
        className={clsx(
          'relative w-full sm:-mb-[10vh]  sm:bg-bb-blue-lighter',
          isStart && 'h-[60vw] sm:h-[60vh] -top-[25vw] sm:top-0',
          !isStart && 'left-0 top-0 h-[30vw] sm:h-[30vh] overflow-hidden'
        )}
      >
        {isStart ? (
          <div className="absolute top-1/2 z-10 w-full -translate-y-[15vw] sm:top-[18vh] sm:-translate-y-[4vh]">
            <BigRedBorder />
          </div>
        ) : (
          <div className="absolute -left-[0vw] top-[1vw] z-10 w-[40vw] sm:left-[4vh] sm:top-0 sm:w-[40vh]">
            <SmallRedBorder />
          </div>
        )}
        {isStart ? (
          <div className="absolute top-1/2 z-10 -translate-y-[15vw] transform sm:left-1/2 sm:z-10 sm:-translate-x-3/4 sm:-translate-y-[18vh]">
            <LogotypeBig />
          </div>
        ) : (
          <div className="absolute top-[3vw] z-10 transform sm:left-[4vh] sm:top-[1vh] sm:z-10 ">
            <LogotypeSmall />
          </div>
        )}
        {isStart ? (
          <div className="absolute top-1/2 z-10 -translate-y-[15vw] transform sm:left-1/2 sm:z-10 translate-x-[55vw] sm:translate-x-[5vh] sm:-translate-y-[24vh]">
            <Hasselhoff />
          </div>
        ) : (
          <div className="absolute left-[15vw] top-0 z-10 sm:left-[15vh]">
            <Hasselhoff />
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
