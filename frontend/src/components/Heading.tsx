import clsx from 'clsx';
import { ReactNode } from 'react';
import { isStartPage } from '../utils';
import { useLocation } from 'react-router-dom';

interface Props {
  children: ReactNode;
}
function Heading({ children }: Props) {
  const isStart = isStartPage(useLocation());
  return (
    <h1
      className={clsx(
        `relative -m-8 mb-5 flex transform justify-center bg-bb-blue-dark font-bb-heading`,
        isStart && ' rotate-3',
        !isStart && '-rotate-1',
        `text-5xl text-white  shadow`,
        `after:absolute after:right-0 after:block after:h-full after:w-48 after:translate-x-[99%] after:transform after:bg-bb-blue-dark`,
        `before:absolute before:left-0 before:block before:h-full before:w-48 before:-translate-x-[99%] before:transform before:bg-bb-blue-dark`
      )}
    >
      <div
        className={clsx(
          'w-3/4 transform text-center',
          isStart && '-rotate-3 py-10',
          !isStart && 'rotate-1 py-5'
        )}
      >
        {children}
      </div>
    </h1>
  );
}

export default Heading;
