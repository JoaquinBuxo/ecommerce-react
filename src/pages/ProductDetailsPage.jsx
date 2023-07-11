import { useLoaderData } from 'react-router-dom';

export const productDetailsLoader = async ({ params }) => {
  const { productId } = params;

  const response = await fetch(
    `https://itx-frontend-test.onrender.com/api/product/${productId}`
  );

  return response.json();
};

const ProductDetailsPage = () => {
  const product = useLoaderData();

  return (
    <div>
      <h2>Product details for {product.model}</h2>
      <p>Brand: {product.brand}</p>
    </div>
  );
};

export default ProductDetailsPage;
