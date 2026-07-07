import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        width="200"
      />

      <h3>{product.title}</h3>

      <p>₹{product.price}</p>

      <Link to={`/product/${product.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;