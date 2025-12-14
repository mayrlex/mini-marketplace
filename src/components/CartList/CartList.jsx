import CartItem from "../CartItem/CartItem";

import "./CartList.css";

const CartList = ({ className = "", cart = [], totalPrice, onRemove }) => {
  return (
    <div className={`cart ${className}`}>
      {!cart.length ? (
        <p className="cart__title cart__title--empty">Cart is empty</p>
      ) : (
        <>
          <p className="cart__title">Cart</p>

          <ul className="cart__list">
            {cart.map((product, index) => (
              <CartItem
                key={index}
                product={product}
                quantity={product.quantity}
                onRemove={onRemove}
              />
            ))}
          </ul>

          <div className="cart__footer">
            <span className="cart__footer-label">Total:</span>
            <span className="cart__footer-value">${totalPrice}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CartList;
