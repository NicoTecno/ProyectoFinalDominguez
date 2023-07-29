import Button from "react-bootstrap/Button";
import { CartContext } from "../contexts/cartContext";
import React, { useContext } from "react";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export const Cart = () => {
  const { cart, clearCart, totalAmount, total } = useContext(CartContext);

  if (totalAmount === 0) {
    return (
      <div className="carrito">
        <h1 className="carrito__vacio">El carrito está vacío</h1>
        <Link to={`/`}>
          <Button>Volver al Inicio</Button>
        </Link>
      </div>
    );
  }

  return (
    <Container className="">
      <h1>Carrito</h1>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}

      <Row md={4}>
        <Col>
          <h1>Total: ${total}</h1>
        </Col>
        <Col>
          <Link to={`/checkout`}>
            <button className="finalizarCompra">Finalizar Compra</button>
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col>
          <Button onClick={() => clearCart()}>Vaciar Carrito</Button>
          <Link to={`/`}>
            <Button>Seguir comprando</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
