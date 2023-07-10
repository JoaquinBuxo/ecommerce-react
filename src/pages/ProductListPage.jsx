import React, { Suspense } from 'react';
import Header from '../components/Header';
import Item from '../components/Item';
import Search from '../components/Search';
import { fetchData } from '../utils/fetchData';

const apiProducts = fetchData(
  'https://itx-frontend-test.onrender.com/api/product'
);

const ProductListPage = () => {
  const products = apiProducts.read();
  const [query, setQuery] = React.useState('');

  const filteredProducts = products.filter((product) =>
    product.model.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      Product List
      <Header />
      <Search query={query} setQuery={setQuery} />
      <Item />
      <Suspense fallback={<div>Loading...</div>}>
        {filteredProducts?.map((product) => (
          <li key={product.id}>{product.model}</li>
        ))}
      </Suspense>
    </div>
  );
};

export default ProductListPage;
