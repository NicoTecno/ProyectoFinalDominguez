import { Item } from "./Item";
import Container from "react-bootstrap/Container";

export const ItemList = ({ products }) => {
  return (
    <Container className="d-flex flex-row  flex-wrap mt-2 justify-content-between">
      {products.map((product) => {
        return <Item key={product.id} product={product} />;
      })}
    </Container>
  );
};
