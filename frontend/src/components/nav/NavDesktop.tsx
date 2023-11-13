import clsx from 'clsx';
import { isStartPage } from '../../utils';
import { MenuItem } from './Nav';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  items?: MenuItem[];
}
const NavDesktop = ({ items }: Props) => {
  const location = useLocation();
  const currentPath = location.pathname.slice(1);
  const isStart = isStartPage(useLocation());

  const className = clsx(
    'pt-2 pb-3',
    isStart
      ? `flex bg-bb-blue-dark transform rotate-6
  before:block before:absolute before:h-full before:w-48 before:left-0 before:top-0 before:transform before:-translate-x-[99%] before:bg-bb-blue-dark
  after:block after:absolute after:h-full after:w-[90vw] after:right-0 after:top-0 after:transform after:translate-x-[99%] after:bg-bb-blue-dark`
      : `flex bg-bb-blue-dark rounded-md`
  );

  return (
    <ul className={className}>
      {items?.map(({ name, path }) => (
        <li
          key={name}
          className={clsx(
            'relative px-8 py-0 font-bb-heading text-bb-sand-base',
            'hover:text-bb-blue-lighter',
            'after:absolute after:right-0 after:top-1/2 after:block after:h-1/2 after:w-[.2rem] after:-translate-y-[40%] after:rounded-lg after:bg-bb-sand-base last:after:hidden',
            isStart && 'text-2xl',
            !isStart && 'text-xl'
          )}
        >
          {currentPath !== path ? (
            <Link to={path}>{name}</Link>
          ) : (
            <span
              className={clsx(
                isStart ? 'border-b-4' : 'border-b-2',
                'border-bb-blue-light text-bb-blue-light'
              )}
            >
              {name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavDesktop;
