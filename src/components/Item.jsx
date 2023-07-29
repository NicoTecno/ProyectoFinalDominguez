import { Link } from "react-router-dom";
import React from "react";

export const Item = ({ product: { id, image, title, price, stock } }) => {
  return (
    <div className="ConteinerDivCardItem">
      <img src={image} alt={title} />
      <h5>{title}</h5>
      <p>${price}</p>
      <p>Descripcion del producto</p>
      <Link to={`/items/${id}`} className="BotonComprar">
        Ver detalles
      </Link>
      <p>Stock disponible: {stock}</p>
    </div>
  );
};
