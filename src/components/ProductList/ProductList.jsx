import { ProductCard } from "../ProductCard/ProductCard";
import { fetchProducts } from "./api";

const products = await fetchProducts();

export const ProductList = () => {
  return (
    <div>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};
