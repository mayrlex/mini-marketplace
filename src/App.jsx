import CartList from "./components/CartList/CartList";
import ProductList from "./components/ProductList/ProductList";
import { useCart } from "./hooks/useCart";

const App = () => {
  const { cart, totalPrice, addToCart, removeFromCart } = useCart();

  return (
    <div className="app">
      <ProductList className="app__product-list" onAdd={addToCart} />
      <CartList
        className="app__cart"
        cart={cart}
        totalPrice={totalPrice}
        onRemove={removeFromCart}
      />
    </div>
  );
};

export default App;
