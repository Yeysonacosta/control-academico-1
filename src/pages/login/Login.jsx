import { useState } from "react";
import "./Login.css";


export default function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario === "75734881" && clave === "75734881") {
      onLogin();
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src="src/img/logo.jpg" alt="UCV" className="logo.jpg" />

        <div className="login-left">

        </div>

        <div className="login-right">
          <h2>Iniciar Sesión</h2>


          <form onSubmit={handleSubmit}>
            <label>Usuario:</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />

            <label>Contraseña:</label>
            <input
              type="password"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
            />

            {error && <p className="error">{error}</p>}

            <button type="submit" className="btn-login">
              Entrar
            </button>
          </form>

        </div>

      </div>
    </div>
  );
}
