import React, { Suspense } from 'react';
import Item from '../components/Item';
import Search from '../components/Search';
import ProductList from '../components/ProductList';
import { ErrorBoundary } from 'react-error-boundary';

const ProductListPage = () => {
  const [query, setQuery] = React.useState('');

  return (
    <div>
      Product List
      <Search query={query} setQuery={setQuery} />
      <Item />
      <ErrorBoundary fallback={<div>Error fetching data</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList query={query} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ProductListPage;
