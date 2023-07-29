import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, amount) => {
    removeItem(item.id);
    setCart((prev) => [...prev, { ...item, amount }]);
  };

  const removeItem = (itemId) => {
    const cartUpdate = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdate);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalAmount = cart.reduce((acc, producto) => acc + producto.amount, 0);

  const total = cart.reduce(
    (acc, producto) => acc + parseFloat(producto.price) * producto.amount,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalAmount, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
