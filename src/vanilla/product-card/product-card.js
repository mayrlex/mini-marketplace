export const createProductCard = (product) => {
	const card = document.createElement("div");
	card.className = "product-card";

	const thumb = document.createElement("div");
	thumb.className = "product-card__thumb";

	const img = document.createElement("img");
	img.src = product.image;
	img.alt = product.title;

	thumb.appendChild(img);

	const title = document.createElement("p");
	title.className = "product-card__title";
	title.textContent = product.title;

	const footer = document.createElement("div");
	footer.className = "product-card__footer";

	const price = document.createElement("p");
	price.className = "product-card__price";

	const priceLabel = document.createElement("span");
	priceLabel.className = "product-card__price-label";
	priceLabel.textContent = "Price";

	const priceValue = document.createElement("span");
	priceValue.className = "product-card__price-value";
	priceValue.textContent = `$${product.price}`;

	price.append(priceLabel, priceValue);

	const action = document.createElement("button");
	action.type = "button";
	action.className = "button";
	action.textContent = "Add to cart";

	action.addEventListener("click", (event) => {
		event.preventDefault();

		window.dispatchEvent(
			new CustomEvent("add-to-cart", {
				detail: product,
			})
		);
	});

	footer.append(price, action);

	card.append(thumb, title, footer);

	return card;
};
