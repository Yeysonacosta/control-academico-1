import { useState } from "react";

export default function TablaCursos() {
  const [lista, setLista] = useState([
  
  ]);

  const [buscar, setBuscar] = useState("");
  const [form, setForm] = useState({ nombre: "", docente: "" });
  const [editingId, setEditingId] = useState(null);

  const filtrados = lista.filter(
    (c) =>
      c.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
      c.docente.toLowerCase().includes(buscar.toLowerCase()) ||
      c.id.toString().includes(buscar)
  );

  const handleSubmit = () => {
    if (!form.nombre || !form.docente) return;

    if (editingId) {
      setLista(
        lista.map((c) =>
          c.id === editingId ? { ...c, ...form } : c
        )
      );
      setEditingId(null);
    } else {
      setLista([...lista, { ...form, id: lista.length + 1 }]);
    }

    setForm({ nombre: "", docente: "" });
  };

  const editar = (item) => {
    setForm(item);
    setEditingId(item.id);
  };

  const eliminar = (id) => {
    setLista(lista.filter((c) => c.id !== id));
  };

  return (
    <div className="box">
      <h2>Gestión de Cursos</h2>

      <input
        type="text"
        placeholder="Buscar..."
        className="input"
        value={buscar}
        onChange={(e) => setBuscar(e.target.value)}
      />

      <div className="form-row">
        <input
          type="text"
          placeholder="Nombre del curso"
          className="input"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Docente"
          className="input"
          value={form.docente}
          onChange={(e) => setForm({ ...form, docente: e.target.value })}
        />
        <button className="btn add" onClick={handleSubmit} disabled={!form.nombre || !form.docente}>
          {editingId ? "Guardar" : "Agregar"}
        </button>
      </div>

      <table className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Curso</th>
            <th>Docente</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.nombre}</td>
              <td>{c.docente}</td>
              <td>
                <div className="actions">
                  <button className="btn-edit" onClick={() => editar(c)}>Editar</button>
                  <button className="btn-delete" onClick={() => eliminar(c.id)}>Eliminar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
