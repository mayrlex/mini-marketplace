import { cloneElement } from "react";
import "./ProductCard.css";

const ProductCard = ({ product, children, onAdd }) => {
  return (
    <div className="product-card">
      <div className="product-card__thumb">
        <img src={product.image} alt={product.title} />
      </div>

      <p className="product-card__title">{product.title}</p>
      <p className="product-card__desc">{product.description}</p>

      <div className="product-card__footer">
        <p className="product-card__price">
          <span className="product-card__price-label">Price</span>
          <span className="product-card__price-value">${product.price}</span>
        </p>

        {cloneElement(children, {
          onClick: () => onAdd(product),
        })}
      </div>
    </div>
  );
};

export default ProductCard;
