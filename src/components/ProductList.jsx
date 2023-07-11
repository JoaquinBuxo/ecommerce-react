import React from 'react';
import PropTypes from 'prop-types';
import { fetchData } from '../utils/fetchData';

const apiProducts = fetchData(
  'https://itx-frontend-test.onrender.com/api/product'
);

const ProductList = ({ query }) => {
  const products = apiProducts.read();

  const filteredProducts = products.filter((product) =>
    product.model.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      {filteredProducts?.map((product) => (
        <li key={product.id}>{product.model}</li>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  query: PropTypes.string,
};

export default ProductList;
