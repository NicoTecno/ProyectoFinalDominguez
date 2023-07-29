import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import { CartProvider } from "./contexts/cartContext";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Cart } from "./components/Cart";
import { Inicio } from "./components/Inicio";
import { Consulta } from "./components/Consulta";
import { Checkout } from "./components/Checkout";

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/items/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Consulta" element={<Consulta />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
