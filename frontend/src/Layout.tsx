import { Outlet, useLocation } from 'react-router-dom';
import PreStartHeader from './components/PreStartHeader';
import Header from './components/Header';
import Nav from './components/nav/Nav';
import Footer from './components/Footer';
import { isStartPage } from './utils';
import clsx from 'clsx';
import { useEffect } from 'react';

const Layout = () => {
  const location = useLocation();

  const getTitle = (pathname: string) => {
    switch (pathname) {
      case '/brackets':
        return 'Brackets';
      case '/charts':
        return 'Charts';
    }
    return 'Welcome to Baffin Baywatch!';
  };

  useEffect(() => {
    (document as Document).title = getTitle(location.pathname);
    console.log(location);
  }, [location]);

  const isStart = isStartPage(useLocation());
  return (
    <div className="flex w-full items-center justify-center bg-bb-blue-lightest sm:place-content-center">
      <div
        className={clsx(
          'relative w-[100wv] overflow-x-hidden bg-bb-sand-base sm:max-w-[60rem] sm:shadow-xl'
        )}
      >
        <div className="-mb-3 overflow-hidden">
          <Nav />
          {isStart && <PreStartHeader />}
          <Header />
        </div>
        <main>
          <Outlet />
        </main>
        <Footer>
          Baffin Baywatch © 2023 - This is it.
          <br />
          Don't be a stranger.
        </Footer>
      </div>
    </div>
  );
};

export default Layout;
