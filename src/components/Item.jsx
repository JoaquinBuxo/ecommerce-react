import { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

const Image = lazy(() => import('./Image'));

const Item = ({ product }) => {
  return (
    <div className='group relative'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        <Suspense fallback={<div>Loading Image...</div>}>
          <Image imgUrl={product.imgUrl} model={product.model} />
        </Suspense>
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>{product.model}</h3>
          <p className='mt-1 text-sm text-gray-500'>{product.brand}</p>
        </div>
        <p className='text-sm font-medium text-gray-900'>${product.price}</p>
      </div>
    </div>
  );
};

Item.propTypes = {
  product: PropTypes.object,
};

export default Item;
