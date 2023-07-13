import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import * as ApiService from '../services/apiService';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useLocalStorage('cart', 0);

  const addToCart = async (productSelected) => {
    try {
      const response = await ApiService.postToCart(productSelected);
      const { count } = response;
      setCartCount((prevCount) => prevCount + count);
    } catch (error) {
      console.error('Actions: Error adding to cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
