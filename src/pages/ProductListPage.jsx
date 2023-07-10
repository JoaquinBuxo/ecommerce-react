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

  return (
    <div>
      Product List
      <Header />
      <Search />
      <Item />
      <Suspense fallback={<div>Loading...</div>}>
        {products?.map((product) => (
          <li key={product.id}>{product.model}</li>
        ))}
      </Suspense>
    </div>
  );
};

export default ProductListPage;
