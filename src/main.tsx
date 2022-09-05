import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.component';
import { worker } from '~/mocks/browser';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const query = new QueryClient();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={query}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);

worker.start();
