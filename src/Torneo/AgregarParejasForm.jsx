import { HorarioDia } from "./HorarioDia";
import { useNavigate } from "react-router-dom";

export const AgregarParejasForm = ({
  dateDiff,
  parejaFinal,
  setParejaFinal,
  setDisplay,
}) => {
  const n = dateDiff;

  const navigate = useNavigate();

  //---------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Eliminar clg despues del segundo sprint
      console.log(JSON.stringify(parejaFinal));

      // Agrega el evento a la base de datos
      const response = await fetch("http://localhost:8080/api/parejas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parejaFinal),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error submiting form: ", error);
    }

    // Redirecciona a la pagina del evento creado, usando la clave aleatoria
    navigate(`/eventos/${parejaFinal.criptic}`);
  };
  //---------------------------------------------------------
  const onSubmit = (e) => {
    e.preventDefault();

    handleSubmit(e);
    setDisplay(true);
  };

  return (
    <form id="agregarParejasForm" onSubmit={onSubmit}>
      <div>
        <label htmlFor="apellidoUno" className="text-light text-sm block">
          Apellido Jugador 1
        </label>
        <input
          type="text"
          id="apellidoUno"
          name="apellidoUno"
          onChange={(e) => {
            setParejaFinal({ ...parejaFinal, apellidoUno: e.target.value });
          }}
        />

        <label htmlFor="apellidoDos" className="text-light text-sm block">
          Apellido Jugador 2
        </label>
        <input
          type="text"
          id="apellidoDos"
          name="apellidoDos"
          onChange={(e) => {
            setParejaFinal({ ...parejaFinal, apellidoDos: e.target.value });
          }}
        />
      </div>

      {Array.apply(null, { length: n }).map((e, i) => (
        <HorarioDia
          dia={i + 1}
          key={i}
          parejaFinal={parejaFinal}
          setParejaFinal={setParejaFinal}
        />
      ))}

      <div className="text-light mt-2">
        <h3>Disponibilidad Horaria</h3>
        <div className="flex justify-around">
          <label htmlFor="obligado">Obligado</label>
          <input
            type="radio"
            id="obligado"
            name="disponibilidad"
            value="0"
            onChange={(e) => {
              setParejaFinal({
                ...parejaFinal,
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
              setParejaFinal({
                ...parejaFinal,
                disponibilidad: e.target.value,
              });
            }}
          />
        </div>
      </div>

      <div className="flex justify-between mt-5">
        {/* Falta la funcion onSubmit para que la pareja vaya a una lista y no a la BD TODAVIA */}
        <button className="text-light border-2  rounded-xl p-2">
          Seguir Agregando
        </button>

        <button className="text-contrast border-2 rounded-xl p-2" type="submit">
          Agregar Pareja
        </button>
      </div>
    </form>
  );
};
