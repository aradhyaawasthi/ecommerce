import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import Loader from "../components/Loader";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div style={{ padding: "20px" }}>
      <img
        src={product.thumbnail}
        alt={product.title}
        width="300"
      />

      <h2>{product.title}</h2>

      <h2>₹{(product.price * 85).toLocaleString("en-IN")}</h2>

      <p>{product.description}</p>

      <p>
        <b>Category:</b> {product.category}
      </p>

      <p>
        <b>Brand:</b> {product.brand}
      </p>

      <p>
        <b>Rating:</b> ⭐ {product.rating}
      </p>
      <button
  onClick={() => addToCart(product)}
  style={{
    marginTop: "20px",
    padding: "12px 20px",
    background: "#ff4d6d",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  Add to Cart
</button>
    </div>
  );
}

export default ProductDetails;
