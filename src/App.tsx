import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { webTheme } from './theme';
import { globalCss } from './styles/globalCss';
import Layout from './components/Layout/Layout';
import routes from './routes';
import ErrorPage from './pages/error-page/ErrorPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: routes,
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={webTheme}>
        <Global styles={globalCss} />
        <ToastContainer />
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
