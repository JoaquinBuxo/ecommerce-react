import Item from './Item';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductList = ({ products, query }) => {
  const filteredProducts = products.filter(
    (product) =>
      product.model.toLowerCase().includes(query.toLowerCase()) ||
      product.brand.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {filteredProducts?.map((product) => (
        <Link to={`/${product.id}`} key={product.id}>
          <Item product={product} />
        </Link>
      ))}
    </>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
  query: PropTypes.string,
};

export default ProductList;
