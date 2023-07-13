import './App.css';

// Routing
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

//Pages
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import NotFound from './pages/NotFound';
import RootLayout from './layouts/RootLayout';
import ProductError from './pages/ProductError';
import { CartProvider } from './context/CartContext';
import { getProductsDetails } from './services/apiService';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<ProductListPage />} />
      <Route
        path='/:productId'
        element={<ProductDetailsPage />}
        loader={getProductsDetails}
        errorElement={<ProductError />}
      />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
