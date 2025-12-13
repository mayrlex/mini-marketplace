import "./CartItem.css";

const CartItem = ({ product, quantity = 1, onRemove }) => {
  return (
    <>
      <li className="cart-item">
        <span className="cart-item__title">{product.title}</span>

        {quantity > 1 && (
          <span className="cart-item__quantity">x{quantity}</span>
        )}

        <button className="cart-item__action" onClick={() => onRemove(product)}>
          Remove
        </button>
      </li>
    </>
  );
};

export default CartItem;
