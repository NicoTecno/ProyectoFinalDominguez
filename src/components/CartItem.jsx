import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const CartItem = ({ id, title, price, amount }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <Container className="d-flex flex-row  flex-wrap mt-2 justify-content-between">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h3>{title}</h3>
        </Col>
        <Col md="auto">
          <h3>x({amount})</h3>
        </Col>
        <Col md="auto">
          <h3>${price}</h3>
        </Col>
        <Col md="auto">
          <h3>Subtotal :${price * amount}</h3>
        </Col>
        <Col md="auto">
          <button
            className="BotonEliminarPrdoucto"
            onClick={() => removeItem(id)}
          >
            Eliminar Producto
          </button>
        </Col>
      </Row>
    </Container>
  );
};
