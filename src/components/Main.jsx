// CORE
import { Route, Routes } from "react-router-dom";
// PARTS
import { Promo } from "./Promo.jsx";
import { Products } from "./Products.jsx";
import { Cart } from "./Cart.jsx";
import { Order } from "./Order.jsx";

export const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Promo />
              <Products />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Cart />
              <Order />
            </>
          }
        />
      </Routes>
    </main>
  );
};
