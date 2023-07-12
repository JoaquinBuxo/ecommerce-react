import React, { Suspense, lazy } from 'react';
import Search from '../components/Search';
import { ErrorBoundary } from 'react-error-boundary';

const ProductList = lazy(() => import('../components/ProductList'));

const ProductListPage = () => {
  const [query, setQuery] = React.useState('');

  return (
    <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
      <Search query={query} setQuery={setQuery} />
      <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
        Our Products
      </h2>

      <ErrorBoundary fallback={<div>Error fetching data</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList query={query} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ProductListPage;
