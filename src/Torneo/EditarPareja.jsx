import { EditarHorario } from "./EditarHorario";

export const EditarPareja = ({
  editPareja,
  setEditPareja,
  dateDiff,
  active,
  setDisplay,
  handleSearch,
  setUpdating,
}) => {
  const n = dateDiff + 1;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Agrega el evento a la base de datos
      const response = await fetch(
        `http://localhost:8080/api/parejas/${editPareja.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editPareja),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error submiting form: ", error);
    }

    setDisplay(true);
    setUpdating(false);
    handleSearch(active);
  };

  return (
    <div className="mt-5 font-primary">
      <form id="agregarParejasForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="apellidoUno" className="text-light text-sm block">
            Apellido Jugador 1
          </label>
          <input
            type="text"
            id="apellidoUno"
            name="apellidoUno"
            value={editPareja.apellidoUno}
            onChange={(e) => {
              setEditPareja({ ...editPareja, apellidoUno: e.target.value });
            }}
          />
          <label htmlFor="apellidoDos" className="text-light text-sm block">
            Apellido Jugador 2
          </label>
          <input
            type="text"
            id="apellidoDos"
            name="apellidoDos"
            value={editPareja.apellidoDos}
            onChange={(e) => {
              setEditPareja({ ...editPareja, apellidoDos: e.target.value });
            }}
          />
        </div>

        <div>
          {Array.apply(null, { length: n }).map((e, i) => (
            <EditarHorario
              dia={i + 1}
              key={i}
              editPareja={editPareja}
              setEditPareja={setEditPareja}
            />
          ))}
        </div>

        <div className="text-light mt-2">
          <h3>Disponibilidad Horaria</h3>
          <div className="flex justify-around">
            <label htmlFor="obligado">Obligado</label>
            <input
              type="radio"
              id="obligado"
              name="disponibilidad"
              value={editPareja.disponibilidad}
              onChange={(e) => {
                setEditPareja({
                  ...editPareja,
                  disponibilidad: e.target.value,
                });
              }}
            />
            <label htmlFor="preferencia">Preferencia</label>
            <input
              type="radio"
              id="preferencia"
              name="disponibilidad"
              value="1"
              onChange={(e) => {
                setEditPareja({
                  ...editPareja,
                  disponibilidad: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="text-contrast border-2 rounded-xl p-2"
            type="submit"
          >
            Terminar Editar
          </button>
        </div>
      </form>
    </div>
  );
};
