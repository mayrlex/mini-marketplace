import './ProductCard.css';

export const ProductCard = ({ product }) => {
    return (
        <div>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    );
}