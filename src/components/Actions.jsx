import PropTypes from 'prop-types';
import { useCart } from '../hooks/useCart';
import * as ApiService from '../services/apiService';

const Actions = ({ productId, options }) => {
  const { setCartCount } = useCart();

  const addToCart = async (productSelected) => {
    try {
      const response = await ApiService.addToCart(productSelected);
      const { count } = response;
      setCartCount((prevCount) => prevCount + count);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { colors, storages } = event.target.elements;

    const productSelected = {
      id: productId,
      colorCode: colors.value,
      storageCode: storages.value,
    };

    addToCart(productSelected);
  };

  return (
    <form onSubmit={handleSubmit} action='/'>
      {Object.entries(options).map(([selectName, selectOptions]) => (
        <div key={selectName} className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Pick the {selectName}</span>
          </label>
          <select className='select select-bordered' name={selectName}>
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
