import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from 'react-dom/client';
import RouteHandler from './RouteHandler';
import './main.css';

const queryClient = new QueryClient();
const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <div className="h-[100vh] w-full overflow-x-hidden bg-bb-sand-base">
        <RouteHandler></RouteHandler>
      </div>
    </React.StrictMode>
  </QueryClientProvider>
);
