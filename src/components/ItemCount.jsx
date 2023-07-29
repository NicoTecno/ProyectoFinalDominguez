import React from "react";
import { useState } from "react";
import "../css/style.css";
import { Link } from "react-router-dom";

export function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < stock) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <div>
        <button className="BotonDisminuirCantidad" onClick={decrement}>
          -
        </button>
        <spam className="NumeroCantidad"> {count} </spam>
        <button className="BotonAumentarCantidad" onClick={increment}>
          +
        </button>
      </div>
      <Link to={`/cart`}>
        <button className="BotonComprar" onClick={() => onAdd(count)}>
          Comprar
        </button>
      </Link>
    </div>
  );
}
