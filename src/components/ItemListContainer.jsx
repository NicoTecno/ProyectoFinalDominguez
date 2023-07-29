import { ItemList } from "./ItemList";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refCollections = collection(db, "items");

    const q = query(refCollections, where("category", "==", categoryId));

    getDocs(q)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          alert("No hay resultados");
        } else {
          const fetchedDocuments = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProducts(fetchedDocuments);
        }
      })
      .catch((error) => {
        console.error("Error al hacer fetch", error);
      });
  }, [categoryId]);
  return (
    <Container>
      {products.length == 0 ? (
        <div>Loading...</div>
      ) : (
        <ItemList products={products} />
      )}
    </Container>
  );
};
