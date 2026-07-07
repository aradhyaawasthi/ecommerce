import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
      }}
    >
      <h1
  style={{
    fontSize: "clamp(2rem, 6vw, 48px)",
    marginBottom: "20px",
    lineHeight: "1.2",
    wordBreak: "break-word",
  }}
>
  Welcome to Our E-Commerce Store 🛍️
</h1>
      <p
  style={{
    fontSize: "clamp(1rem, 3vw, 20px)",
    color: "#555",
    marginBottom: "35px",
    padding: "0 10px",
  }}
>
  Browse amazing products and add your favourites to the cart.
</p>

      <Link to="/shop">
        <button
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            border: "none",
            borderRadius: "8px",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </Link>
    </div>
  );
}

export default Home;