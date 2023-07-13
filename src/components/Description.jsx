import PropTypes from 'prop-types';

const Description = ({ product }) => {
  const productProperties = [
    { label: 'Brand', value: product.brand },
    { label: 'CPU', value: product.cpu },
    { label: 'RAM', value: product.ram },
    { label: 'OS', value: product.os },
    { label: 'Display Resolution', value: product.displayResolution },
    { label: 'Battery', value: product.battery },
    { label: 'Primary Camera', value: product.primaryCamera },
    { label: 'Secondary Camera', value: product.secondaryCmera },
    { label: 'Dimensions', value: product.dimensions },
    { label: 'Weight', value: product.weight },
  ];

  return (
    <div className='mt-10'>
      <h3 className='text-sm font-medium text-gray-900'>Highlights</h3>

      <div className='mt-4'>
        <ul role='list' className='list-disc space-y-2 pl-4 text-sm'>
          {productProperties.map((property) => (
            <li className='text-gray-400' key={property.label}>
              <span className='text-gray-600'>
                {property.label}:
                {Array.isArray(property.value)
                  ? property.value.map((item) => (
                      <span className='badge ml-3' key={item}>
                        {item}
                      </span>
                    ))
                  : property.value}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <h6 className='mt-10 text-2xl font-semibold'>
        {product.price ? `$${product.price}` : 'Price not available'}
      </h6>
    </div>
  );
};

Description.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string,
    cpu: PropTypes.string,
    ram: PropTypes.string,
    os: PropTypes.string,
    displayResolution: PropTypes.string,
    battery: PropTypes.string,
    primaryCamera: PropTypes.arrayOf(PropTypes.string),
    secondaryCmera: PropTypes.arrayOf(PropTypes.string),
    dimensions: PropTypes.string,
    weight: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default Description;
