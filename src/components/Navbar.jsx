import { Link } from "react-router-dom";
import CartBadge from "./CartBadge";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 25px",
        background: "#222",
        color: "white",
        marginBottom: "20px",
      }}
    >
      <div>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>
          Home
        </Link>

        <Link to="/shop" style={{ color: "white", marginRight: "20px" }}>
          Shop
        </Link>

        <Link to="/login" style={{ color: "white", marginRight: "20px" }}>
          Login
        </Link>

        <Link to="/checkout" style={{ color: "white" }}>
          Checkout
        </Link>
      </div>

      <div>
        🛒 Cart <CartBadge />
      </div>
    </nav>
  );
}

export default Navbar;