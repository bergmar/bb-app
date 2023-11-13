import { fetchFromBackend } from '../../api';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { isStartPage } from '../../utils';
import clsx from 'clsx';

export interface MenuItem {
  name: string;
  path: string;
}

const Nav = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['menuItems'],
    queryFn: () => fetchFromBackend('menu-items')
  });

  const isStart = isStartPage(useLocation());

  const subRoutes = data || [];

  const items = isStart
    ? subRoutes
    : [{ name: 'Start', path: '/', module: 'start' }, ...subRoutes];

  return (
    <>
      {isLoading && (
        <dialog className="top-1 z-30 p-2 px-4 shadow-lg" open>
          Laddar...
        </dialog>
      )}
      {error && (
        <dialog
          className="top-1 z-30 bg-bb-red-base p-2 px-4 text-bb-sand-base shadow-lg"
          open
        >
          Fick inte kontakt med servern.
        </dialog>
      )}
      {data && (
        <>
          <nav className="sm:hidden">
            <NavMobile items={items} />
          </nav>
          <nav
            className={clsx(
              'absolute hidden sm:block',
              isStart
                ? 'animate-in-from-t left-[4rem] z-10 sm:-top-24'
                : 'absolute -right-1 top-0 z-20 -rotate-2 transform sm:top-[2vh] '
            )}
          >
            <NavDesktop items={items} />
          </nav>{' '}
        </>
      )}
    </>
  );
};

export default Nav;
