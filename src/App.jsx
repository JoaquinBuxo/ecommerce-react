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
import ProductDetailsPage, {
  productDetailsLoader,
} from './pages/ProductDetailsPage';
import NotFound from './pages/NotFound';
import RootLayout from './layouts/RootLayout';
import ProductError from './pages/ProductError';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<ProductListPage />} />
      <Route
        path='/:productId'
        element={<ProductDetailsPage />}
        loader={productDetailsLoader}
        errorElement={<ProductError />}
      />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
