import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card__thumb">
        <img src={product.image} alt={product.title} />
      </div>

      <p className="product-card__title">{product.title}</p>
      <p className="product-card__desc">{product.description}</p>
      <p className="product-card__price">
        <span className="product-card__price-label">Price</span>
        <span className="product-card__price-value">${product.price}</span>
      </p>
    </div>
  );
};

export default ProductCard;
