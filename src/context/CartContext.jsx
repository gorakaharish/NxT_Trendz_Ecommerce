import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addCartItem = item => {
    setCartList(prevCartList => [...prevCartList, item]);
  };

  const removeCartItem = itemId => {
    setCartList(prevCartList => prevCartList.filter(item => item.id !== itemId));
  };

  const incrementCartItemQuantity = itemId => {
    setCartList(prevCartList =>
      prevCartList.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementCartItemQuantity = itemId => {
    setCartList(prevCartList =>
      prevCartList.map(item =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeAllCartItems = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCartItem,
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeAllCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
