import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Start from './pages/start';
import Charts from './pages/charts';
import Brackets from './pages/brackets';
import { fetchFromBackend } from './api';
import { useQuery } from 'react-query';
import Layout from './Layout';

const RouteHandler = () => {
  const getComponent = (module: string) => {
    switch (module) {
      case 'charts':
        return <Charts />;
      case 'brackets':
        return <Brackets />;
    }
    return <Start />;
  };

  const { data } = useQuery({
    queryKey: ['router'],
    queryFn: async () => {
      const items = await fetchFromBackend('menu-items');
      const routerData = [
        {
          path: '/',
          element: <Layout />,
          children: [
            {
              path: '',
              element: <Start />
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...items.map(({ module, path }: any) => {
              return {
                path,
                element: getComponent(module)
              };
            })
          ]
        }
      ];
      return createBrowserRouter(routerData);
    }
  });

  return data && <RouterProvider router={data} />;
};

export default RouteHandler;
