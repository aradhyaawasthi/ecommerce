import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Login() {
  const { login } = useCart();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/checkout");
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
      }}
    >
      <h1>Login</h1>

      <p
        style={{
          margin: "20px 0",
          fontSize: "18px",
          color: "#555",
        }}
      >
        Continue as a Guest to access Checkout.
      </p>

      <button
        onClick={handleLogin}
        style={{
          padding: "15px 30px",
          border: "none",
          borderRadius: "8px",
          background: "green",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Login as Guest
      </button>
    </div>
  );
}

export default Login;