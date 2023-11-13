import LogotypeBig from './LogotypeBig';
import BigRedBorder from './BigRedBorder';
import Hasselhoff from './Hasselhoff';
import clsx from 'clsx';
import SmallRedBorder from './SmallRedBorder';
import LogotypeSmall from './LogotypeSmall';
import { isStartPage } from '../utils';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const isStart = isStartPage(useLocation());
  return (
    <>
      <header
        className={clsx(
          'relative w-full sm:-mb-[10vh]  sm:bg-bb-blue-lighter',
          isStart && '-top-[25vw] h-[60vw] sm:top-0 sm:h-[60vh]',
          !isStart && 'left-0 top-0 h-[30vw] overflow-hidden sm:h-[30vh]'
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
          <div className=" absolute top-[15vw] z-10 transform sm:left-1/2 sm:top-[13vh] sm:z-10 sm:-translate-x-[34vh]">
            <div className={clsx(isStart && 'scale-0', 'animate-zoom')}>
              <LogotypeBig />
            </div>
          </div>
        ) : (
          <Link
            to=""
            className="absolute top-[3vw] z-10 transform sm:left-[4vh] sm:top-[1vh] sm:z-10 "
          >
            <LogotypeSmall />
          </Link>
        )}
        {isStart ? (
          <div className="absolute left-[65vw] top-[1vw] z-10 w-max transform animate-in-from-b sm:left-[51%] sm:z-10">
            <Hasselhoff />
          </div>
        ) : (
          <div className="absolute left-[15vw] top-0 z-10 w-max sm:left-[15vh]">
            <Hasselhoff />
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
