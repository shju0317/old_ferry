import { createBrowserRouter } from 'react-router-dom';
import Home from '@/views/Home';
import ProductList from '@/views/ProductList';
import RootLayout from '@/views/RootLayout';
import NotFound from './views/NotFound';


const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <ProductList /> }
    ]
  }
]);

export default router;
