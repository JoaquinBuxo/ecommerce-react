import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useLocalStorage('cart', 0);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
