import { useLoaderData } from 'react-router-dom';

export const productDetailsLoader = async ({ params }) => {
  const { productId } = params;

  const response = await fetch(
    `https://itx-frontend-test.onrender.com/api/product/${productId}`
  );

  if (!response.ok) {
    throw Error('Could not find that product');
  }

  return response.json();
};

const ProductDetailsPage = () => {
  const product = useLoaderData();

  return (
    <div>
      <h2 className='text-3xl font-bold underline'>
        Product details for {product.model}
      </h2>
      <p>Brand: {product.brand}</p>
    </div>
  );
};

export default ProductDetailsPage;
