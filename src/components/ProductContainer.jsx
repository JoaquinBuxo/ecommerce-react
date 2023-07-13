import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import * as ApiService from '../services/apiService';
import ProductList from './ProductList';

const ProductContainer = ({ query }) => {
  const [products, setProducts] = useLocalStorage('products', []);

  useEffect(() => {
    try {
      if (products.length === 0) {
        const data = ApiService.getAllProducts.read();
        setProducts(data);
      }
    } catch (error) {
      console.log('ProductContainer: Error fetching products: ', error);
    }
  }, [products, setProducts]);

  return (
    <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'>
      <ProductList products={products} query={query} />
    </div>
  );
};

ProductContainer.propTypes = {
  query: PropTypes.string,
};

export default ProductContainer;
