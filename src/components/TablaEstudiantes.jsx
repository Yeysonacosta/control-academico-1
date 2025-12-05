import { useState } from "react";

export default function TablaEstudiantes() {
  const [lista, setLista] = useState([
   
  ]);

  const [buscar, setBuscar] = useState("");
  const [form, setForm] = useState({ id: "", nombre: "", carrera: "", curso: "" });
  const [editingId, setEditingId] = useState(null);

  const filtrados = lista.filter(
    (e) =>
      e.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
      e.carrera.toLowerCase().includes(buscar.toLowerCase()) ||
      e.curso.toLowerCase().includes(buscar.toLowerCase()) ||
      e.id.toString().includes(buscar)
  );

  const handleSubmit = () => {
    if (!form.nombre || !form.carrera) return;

    if (editingId) {
      setLista(
        lista.map((e) =>
          e.id === editingId ? { ...e, ...form } : e
        )
      );
      setEditingId(null);
    } else {
      setLista([...lista, { ...form, id: lista.length + 1 }]);
    }

    setForm({ id: "", nombre: "", carrera: "", curso: "" });
  };

  const editar = (item) => {
    setForm(item);
    setEditingId(item.id);
  };

  const eliminar = (id) => {
    setLista(lista.filter((e) => e.id !== id));
  };

  return (
    <div className="box">
      <h2 className="box-gestion">Gestión de Estudiantes</h2>

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
          placeholder="Nombre"
          className="input"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Carrera"
          className="input"
          value={form.carrera}
          onChange={(e) => setForm({ ...form, carrera: e.target.value })}
        />
        <input type="text"
          placeholder="curso"
          className="input"
          value={form.curso}
          onChange={(e) => setForm({ ...form, curso: e.target.value })}
        />
        <button className="btn add" onClick={handleSubmit}>
          {editingId ? "Guardar" : "Agregar"}
        </button>
      </div>

      <table className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Carrera</th>
            <th>Curso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.nombre}</td>
              <td>{e.carrera}</td>
              <td>{e.curso}</td>

              <td>

                <div className="actions">
                  <button className="btn-edit" onClick={() => editar(e)}>Editar</button>
                  <button className="btn-delete" onClick={() => eliminar(e.id)}>Eliminar</button>
                </div>


              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
