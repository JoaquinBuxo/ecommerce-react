import { Link, useRouteError } from 'react-router-dom';

const ProductError = () => {
  const error = useRouteError();
  return (
    <div className='grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          Error
        </h1>
        <p className='mt-6 text-base leading-7 text-gray-600'>
          {error.message}
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link to='/' className='btn btn-neutral'>
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductError;
