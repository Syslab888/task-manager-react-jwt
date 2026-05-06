import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // ou um Login.css depois
import "../styles/Login.css";
import { login } from "../services/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const data = await login(email, password);

    setLoading(false);

    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/tasks");
    } else {
      setError("Invalid Credentials");
    }
  }
  return (
    <div className="login-page">
      <div className="tela-login">
        <h1>Login</h1>
        {error && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "8px" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          <br />

          <input
            type="password"
            placeholder="Password"
            value={password}
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />
          <br />

          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Enter"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
