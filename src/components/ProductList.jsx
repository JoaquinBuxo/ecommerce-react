import Item from '../components/Item';
import PropTypes from 'prop-types';
import { fetchData } from '../utils/fetchData';
import { Link } from 'react-router-dom';

const apiProducts = fetchData(
  'https://itx-frontend-test.onrender.com/api/product'
);

const ProductList = ({ query }) => {
  const products = apiProducts.read();

  const filteredProducts = products.filter(
    (product) =>
      product.model.toLowerCase().includes(query.toLowerCase()) ||
      product.brand.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'>
      {filteredProducts?.map((product) => (
        <Link to={`/${product.id}`} key={product.id}>
          <Item product={product} />
        </Link>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  query: PropTypes.string,
};

export default ProductList;
