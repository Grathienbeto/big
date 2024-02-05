export const Horarios = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl text-light text-center">Fechas y Horarios</h2>
      </div>

      <div className="mt-5">
        <label
          htmlFor="fecha_inicio"
          className="text-primaryLight font-primary text-lg"
        >
          Fecha Inicio
        </label>
        <input
          type="date"
          id="fecha_inicio"
          name="fecha_inicio"
          className="font-primary block w-full"
          // onChange={handleChangeFechaInicio}
          required={true}
        />
      </div>
      <div className="mt-5 flex justify-between">
        <div className="w-[30%]">
          <label
            htmlFor="horaInicioI"
            className="text-primaryLight font-primary text-lg"
          >
            Hora Inicio
          </label>
          <input
            type="time"
            id="horaInicioI"
            name="horaInicioI"
            className="font-primary block w-full"
          />
        </div>
        <div className="w-[30%]">
          <label
            htmlFor="horaFinI"
            className="text-primaryLight font-primary text-lg"
          >
            Hora Fin
          </label>
          <input
            type="time"
            id="horaFinI"
            name="horaFinI"
            className="font-primary block w-full"
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="fecha_fin"
          className="text-primaryLight font-primary text-lg"
        >
          Fecha Fin
        </label>
        <input
          type="date"
          id="fecha_fin"
          name="fecha_fin"
          className="font-primary block w-full"
          // onChange={handleChangeFechaFin}
          required={true}
        />
      </div>

      <div className="mt-5 flex justify-between">
        <div className="w-[30%]">
          <label
            htmlFor="horaInicioF"
            className="text-primaryLight font-primary text-lg"
          >
            Hora Inicio
          </label>
          <input
            type="time"
            id="horaInicioF"
            name="horaInicioF"
            className="font-primary block w-full"
          />
        </div>
        <div className="w-[30%]">
          <label
            htmlFor="horaFinF"
            className="text-primaryLight font-primary text-lg"
          >
            Hora Fin
          </label>
          <input
            type="time"
            id="horaFinF"
            name="horaFinF"
            className="font-primary block w-full"
          />
        </div>
      </div>
    </>
  );
};
