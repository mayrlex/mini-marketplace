import { createProductCard } from "../product-card/product-card";
import { fetchProducts } from "./api";

const container = document.getElementById("products");

(async () => {
	const products = await fetchProducts();

	products.forEach((product) => {
		const card = createProductCard(product);

		container.appendChild(card);
	});
})();
