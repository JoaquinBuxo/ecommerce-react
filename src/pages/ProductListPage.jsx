import { useState, Suspense, lazy } from 'react';
import Search from '../components/Search';
import { ErrorBoundary } from 'react-error-boundary';
import Loading from '../components/Loading';

const ProductContainer = lazy(() => import('../components/ProductContainer'));

const ProductListPage = () => {
  const [query, setQuery] = useState('');

  return (
    <div>
      <Search query={query} setQuery={setQuery} />
      <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
        Our Products
      </h2>

      <ErrorBoundary fallback={<div>Error fetching data</div>}>
        <Suspense fallback={<Loading />}>
          <ProductContainer query={query} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ProductListPage;
