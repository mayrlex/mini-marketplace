import { fetchProducts } from "./api";

const products = await fetchProducts();

const App = () => {

  return (
    <>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
