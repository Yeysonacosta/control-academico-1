import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/UCV.png";

export default function Navbar({ onLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">

      <div className="nav-left">
        <img src={logo} alt="Logo" className="nav-logo" />
        <span className="brand">UCV</span>
      </div>

      <div
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-menu ${open ? "open" : ""}`}>
        <li className="nav-menu-inicio">
          <Link to="/">Inicio</Link>
        </li>

        <li className="nav-menu-estudiantes">
          <Link to="/estudiantes">Estudiantes</Link>
        </li>

        <li className="nav-menu-cursos">
          <Link to="/cursos">Cursos</Link>
        </li>

        <li>
          <button className="btn-logout" onClick={onLogout}>
            Cerrar sesión
          </button>
        </li>

      </ul>
    </nav>
  );
}
