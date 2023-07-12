import Description from '../components/Description';
import Actions from '../components/Actions';
import { lazy, Suspense } from 'react';
import { useLoaderData } from 'react-router-dom';

const Image = lazy(() => import('../components/Image'));

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
    <div className='flex flex-col justify-between lg:flex-row gap-16'>
      <div className='flex flex-col gap-6 lg:w-2/4 aspect-square rounded-xl'>
        <Suspense fallback={<div>Loading Image...</div>}>
          <Image imgUrl={product.imgUrl} model={product.model} />
        </Suspense>
      </div>
      <div className='flex flex-col gap-4 lg:w-2/4'>
        <div>
          <h1 className='text-3xl font-bold'>{product.model}</h1>
        </div>
        <Description product={product} />
        <Actions product={product} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
