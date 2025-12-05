import "./inicio.css";
import ucvImg from "../assets/inicio.avif";  // <-- Imagen local optimizada

export default function Inicio() {
  return (
    <div className="inicio-container">
      <div className="text-section">
        <h1 className="titulo-inicio">
          Bienvenido al Sistema de Control Académico
        </h1>

        <p className="parrafo-inicio">
          Este Sistema de Control Académico ha sido creado para optimizar la
          organización de la información educativa y mejorar los procesos
          internos de la institución. Con un sistema moderno, seguro y fácil
          de usar, permite administrar estudiantes, cursos y carreras. Su
          propósito es apoyar al personal administrativo y a la comunidad
          universitaria, brindando un entorno digital que impulse la excelencia
          académica y facilite la toma de decisiones.
        </p>
      </div>

      <img
        src={ucvImg}
        loading="lazy"
        alt="Imagen de inicio UCV"
        className="inicio-img"
      />
    </div>
  );
}

