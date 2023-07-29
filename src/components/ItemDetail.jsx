import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/cartContext";
import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ItemDetail = ({ id, image, title, description, price, stock }) => {
  const product = {
    id: id,
    image: image,
    title: title,
    description: description,
    price: price,
    stock: stock,
  };

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    addItem(product, quantity);
  };
  return (
    <Container>
      <Container>
        <Row>
          <Col md={8}>
            <div className="ContenedorDetailItemIzq">
              <h1>{title}</h1>
              <img src={image} alt="" />
            </div>
          </Col>
          <Col
            md={4}
            className="d-flex align-items-center text-center justify-content-center"
          >
            <div className="ContenedorDetailItemDer">
              <h1>{price}</h1>
              <ItemCount onAdd={handleOnAdd} stock={stock} />
              <h2>Stock: {stock}</h2>
            </div>
          </Col>
        </Row>
        <h2>Especificaciones</h2>
        <Row>{description}</Row>
      </Container>
    </Container>
  );
};
