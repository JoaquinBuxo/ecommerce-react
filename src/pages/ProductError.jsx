import { Link, useRouteError } from 'react-router-dom';

const ProductError = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to='/'>Back to the main page</Link>
    </div>
  );
};

export default ProductError;
