import { HorarioDia } from "./HorarioDia";

export const AgregarParejasForm = () => {
  return (
    <form action="" id="agregarParejasForm">
      <div>
        <label htmlFor="apellidoUno" className="text-light text-sm block">
          Apellido Jugador 1
        </label>
        <input type="text" id="apellidoUno" name="apellidoUno" />

        <label htmlFor="apellidoDos" className="text-light text-sm block">
          Apellido Jugador 2
        </label>
        <input type="text" id="apellidoDos" name="apellidoDos" />
      </div>

      {/* Esto tiene que tener un renderizado dependiendo los dias del torneo */}
      <div>
        <HorarioDia dia={1} />
        <HorarioDia dia={2} />
        <HorarioDia dia={3} />
      </div>

      <div className="text-light mt-2">
        <h3>Disponibilidad Horaria</h3>
        <label htmlFor="obligado">Obligado</label>
        <input type="radio" id="obligado" name="disponibilidad" />

        <label htmlFor="preferencia">Preferencia</label>
        <input type="radio" id="preferencia" name="disponibilidad" />
      </div>

      <div className="flex justify-between mt-5">
        {/* Falta la funcion onSubmit para que la pareja vaya a una lista y no a la BD TODAVIA */}
        <button className="text-light border-2  rounded-xl p-2" type="submit">
          Seguir Agregando
        </button>

        <button className="text-contrast border-2 rounded-xl p-2" type="submit">
          Agregar Pareja
        </button>
      </div>
    </form>
  );
};
