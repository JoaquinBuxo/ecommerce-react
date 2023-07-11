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
    <div>
      {filteredProducts?.map((product) => (
        <Link to={`/${product.id}`} key={product.id}>
          <p>{product.model}</p>
        </Link>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  query: PropTypes.string,
};

export default ProductList;
