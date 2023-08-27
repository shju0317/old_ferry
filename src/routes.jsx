import { createBrowserRouter } from 'react-router-dom';
import Home from '@/views/Home';
import ProductList from '@/views/ProductList';
import RootLayout from '@/views/RootLayout';
import NotFound from './views/NotFound';
import Logo from './components/Logo';

const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <ProductList /> },
      { path: 'about', element: <Logo /> }
    ]
  }
]);

export default router;

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout/>}>
//       <Route index element={<Home />} />
//       <Route path="products" element={<ProductList />} />
//     </Route>
//   )
// );