//Main component to render App component to the root and setting up the routing using react-router-dom
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import App from './App.tsx';
import SessionOverview from './views/sessionOverview/SessionOverview.tsx';
import NewsOverview from './views/newsOverview/NewsOverview.tsx';
import NewsForm from './views/newsForm/NewsForm.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: "session/:sessionDate",
    element: <SessionOverview/>
  },
  {
    path: "news/",
    element: <NewsOverview/>
  },
  {
    path: "createNews/",
    element: <NewsForm/>
  }

]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
