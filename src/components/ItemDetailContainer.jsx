import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [productooo, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const docRef = doc(db, "items", id);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productsAdapted = { id: response.id, ...data };
        setProduct(productsAdapted);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="itemDetailContainer">
      {loading ? (
        <p className="itemDetailContainer__p">Cargando producto...</p>
      ) : (
        <ItemDetail {...productooo} />
      )}
    </div>
  );
};
