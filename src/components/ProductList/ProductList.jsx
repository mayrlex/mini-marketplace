import ProductCard from "../ProductCard/ProductCard";
import { fetchProducts } from "./api";

import "./ProductList.css";

const products = await fetchProducts();

const ProductList = ({ className = "" }) => {
  return (
    <div className={`product-list ${className}`}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
