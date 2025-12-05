import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Estudiantes from "./pages/Estudiantes";
import Cursos from "./pages/Cursos";

import Login from "./pages/login/Login";
import "./App.css";

export default function App() {
  const [logueado, setLogueado] = useState(false);

  const iniciarSesion = () => {
    setLogueado(true);
  };

  const cerrarSesion = () => {
    setLogueado(false);
  };

  return (
    <div className="app-container">
      {!logueado ? (
        <Login onLogin={iniciarSesion} />
      ) : (
        <>
          <Navbar onLogout={cerrarSesion} />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/estudiantes" element={<Estudiantes />} />
            <Route path="/cursos" element={<Cursos />} />
          </Routes>

          <main>
            <Footer />
          </main>
        </>
      )}
    </div>
  );
}
