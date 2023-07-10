import React from 'react';
import Header from '../components/Header';
import Item from '../components/Item';
import Search from '../components/Search';

const ProductListPage = () => {
  return (
    <div>
      Product List
      <Header />
      <Search />
      <Item />
    </div>
  );
};

export default ProductListPage;
