import { HorarioDia } from "./HorarioDia";

export const EditarPareja = ({ editPareja, setEditPareja }) => {
  console.log(editPareja);
  return (
    <form id="agregarParejasForm">
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
