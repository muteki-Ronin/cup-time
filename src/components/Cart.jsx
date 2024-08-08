import { products } from "../products.js";
// PARTS
import { CartItem } from "./CartItem.jsx";

export const Cart = () => {
  return (
    <section className="cart">
      <div className="container cart__container">
        <h2 className="cart__title">Корзина (6)</h2>
        <ul className="cart__items">
          {products.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}
        </ul>

        <div className="cart__summary">
          <h3 className="cart__summary-title">Итого:</h3>
          <p className="cart__total">3333&nbsp;грн.</p>
          <button className="cart__summary-button">Заказать</button>
        </div>
      </div>
    </section>
  );
};
