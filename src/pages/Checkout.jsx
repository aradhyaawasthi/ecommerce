import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
function Checkout() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce(
  (sum, item) => sum + item.price,
  0
);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Checkout</h1>

      <h3>Total Items: {cart.length}</h3>

      {cart.length === 0 ? (
        <div
  style={{
    textAlign: "center",
    marginTop: "30px",
  }}
>
  <h2>🛒 Your Cart is Empty</h2>

  <p style={{ marginBottom: "20px" }}>
    You haven't added any products yet.
  </p>

  <Link to="/shop">
    <button
      style={{
        padding: "12px 25px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      Go Shopping
    </button>
  </Link>
</div>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "8px",
            }}
          >
            <h3>{item.title}</h3>
            <p>
  ₹{(item.price * 85).toFixed(2)}
</p>
            <button
  onClick={() => removeFromCart(index)}
  style={{
    marginTop: "10px",
    padding: "8px 15px",
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  }}
>
  Remove from Cart
</button>
          </div>
        ))
      )}
      {cart.length > 0 && (
  <>
    <hr style={{ margin: "20px 0" }} />
    <h2>
  Total Price: ₹{(total * 85).toFixed(2)}
</h2>
  </>
)}
<button
  onClick={() => alert("🎉 Order Placed Successfully!")}
  style={{
    marginTop: "20px",
    padding: "12px 25px",
    background: "#22c55e",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  }}
>
  Place Order
</button>
    </div>
  );
}

export default Checkout;