import cart from "../assets/carrito-de-compras.png";
import { Link } from "react-router-dom";

const styles = {
  img: {
    height: "2rem",
    width: "auto",
    paddingLeft: 20,
  },
  span: {
    color: "red",
    paddingLeft: 5,
  },
};

import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

export const CartWidget = () => {
  const { totalAmount } = useContext(CartContext);

  return (
    <div className="carrito">
      <Link to={`/cart`}>
        <img src={cart} style={styles.img} alt="Carrito" />
      </Link>
      <span style={styles.span}>{totalAmount}</span>
    </div>
  );
};
