import { useContext } from "react";
import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "../contexts/cartContext";

import { Container, Row, Col } from "react-bootstrap";

export const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  const senOrder = (formData) => {
    const order = {
      buyer: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
      },
      items: cart,
      total: total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) =>
      alert(`Su Orden de compra es ${id} !`)
    );
    clearCart();
  };

  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    senOrder(formData);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div>
        <h1>Checkout</h1>
        <form onSubmit={onSubmit}>
          <Row>
            <Col>
              <label>
                Nombre:
                <input type="text" name="name" onChange={handleChange} />
              </label>
            </Col>
          </Row>
          <Row>
            <Col>
              <label>
                Telefono:
                <input type="text" name="phone" onChange={handleChange} />
              </label>
            </Col>
          </Row>
          <Row>
            <Col>
              <label>
                Email:
                <input type="email" name="email" onChange={handleChange} />
              </label>
            </Col>
          </Row>
        </form>
        <button onClick={onSubmit}>Enviar</button>
      </div>
    </Container>
  );
};
