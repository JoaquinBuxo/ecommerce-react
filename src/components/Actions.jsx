import PropTypes from 'prop-types';
import { useCart } from '../hooks/useCart';

const Actions = ({ productId, options }) => {
  const { addToCart } = useCart();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { colors, storages } = event.target.elements;

      const productSelected = {
        id: productId,
        colorCode: colors.value,
        storageCode: storages.value,
      };

      addToCart(productSelected);
    } catch (error) {
      console.log('Actions: Error getting data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} action='/'>
      {Object.entries(options).map(([selectName, selectOptions]) => (
        <div key={selectName} className='form-control w-full max-w-xs'>
          <label className='label' htmlFor={selectName}>
            <span className='label-text'>Pick the {selectName}</span>
          </label>
          <select
            className='select select-bordered'
            id={selectName}
            name={selectName}
          >
            {selectOptions.map((option) => (
              <option id={option.code} key={option.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      ))}

      <button type='submit' className='mt-5 btn w-full max-w-xs'>
        Add Item
      </button>
    </form>
  );
};

Actions.propTypes = {
  productId: PropTypes.string,
  options: PropTypes.object,
};

export default Actions;
