import PropTypes from 'prop-types';

const Description = ({ product }) => {
  return (
    <div className='mt-10'>
      <h3 className='text-sm font-medium text-gray-900'>Highlights</h3>

      <div className='mt-4'>
        <ul role='list' className='list-disc space-y-2 pl-4 text-sm'>
          <li className='text-gray-400'>
            <span className='text-gray-600'>Brand: {product.brand}</span>
          </li>
          <li className='text-gray-400'>
            <span className='text-gray-600'>CPU: {product.cpu}</span>
          </li>
          <li className='text-gray-400'>
            <span className='text-gray-600'>RAM: {product.ram}</span>
          </li>
          <li className='text-gray-400'>
            <span className='text-gray-600'>OS: {product.os}</span>
          </li>

          <li className='text-gray-400'>
            <span className='text-gray-600'>
              Display Resolution: {product.displayResolution}
            </span>
          </li>
          <li className='text-gray-400'>
            <span className='text-gray-600'>Battery: {product.battery}</span>
          </li>
          <li className='text-gray-400'>
            <span className='text-gray-600'>
              Primary Camera:
              {product.primaryCamera.map((item) => (
                <span className='badge ml-3' key={item}>
                  {item}
                </span>
              ))}
            </span>
          </li>
          <li className='text-gray-400'>
            <span className='text-gray-600'>
              Secondary Camera:
              {product.secondaryCmera.map((item) => (
                <span className='badge ml-3' key={item}>
                  {item}
                </span>
              ))}
            </span>
          </li>
          <li className='text-gray-400'>
            <span className='text-gray-600'>
              Dimentions: {product.dimentions}
            </span>
          </li>
          <li className='text-gray-400'>
            <span className='text-gray-600'>Weight: {product.weight}</span>
          </li>
        </ul>
      </div>

      <h6 className='mt-10 text-2xl font-semibold'>${product.price}</h6>
    </div>
  );
};

Description.propTypes = {
  product: PropTypes.object,
};

export default Description;
