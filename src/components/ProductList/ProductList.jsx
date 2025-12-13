import Button from "../Button/Button";
import ProductCard from "../ProductCard/ProductCard";
import { fetchProducts } from "./api";

import "./ProductList.css";

const products = await fetchProducts();

const ProductList = ({ className = "", onAdd }) => {
  return (
    <div className={`product-list ${className}`}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} onAdd={onAdd}>
          <Button>Add to cart</Button>
        </ProductCard>
      ))}
    </div>
  );
};

export default ProductList;
