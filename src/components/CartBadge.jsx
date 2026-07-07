import { useCart } from "../context/CartContext";

function CartBadge() {
  const { cart } = useCart();

  return (
    <span
      style={{
        background: "#ff4d6d",
        color: "white",
        padding: "5px 10px",
        borderRadius: "20px",
        marginLeft: "8px",
        fontWeight: "bold",
      }}
    >
      {cart.length}
    </span>
  );
}

export default CartBadge;