import PropType from "prop-types";

export const Horarios = ({ data, setData }) => {
  const {
    fechaInicio,
    horaInicioI,
    horaFinI,
    fechaFin,
    horaInicioF,
    horaFinF,
  } = { ...data };

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
          value={fechaInicio}
          type="date"
          id="fecha_inicio"
          name="fecha_inicio"
          min={new Date().toISOString().split("T")[0]}
          className="font-primary block w-full"
          onChange={(e) => {
            setData({ ...data, fechaInicio: e.target.value });
          }}
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
            value={horaInicioI}
            type="time"
            id="horaInicioI"
            name="horaInicioI"
            className="font-primary block w-full"
            onChange={(e) => setData({ ...data, horaInicioI: e.target.value })}
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
            value={horaFinI}
            type="time"
            id="horaFinI"
            name="horaFinI"
            className="font-primary block w-full"
            onChange={(e) => setData({ ...data, horaFinI: e.target.value })}
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
          value={fechaFin}
          type="date"
          id="fecha_fin"
          name="fecha_fin"
          className="font-primary block w-full"
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => setData({ ...data, fechaFin: e.target.value })}
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
            value={horaInicioF}
            type="time"
            id="horaInicioF"
            name="horaInicioF"
            className="font-primary block w-full"
            onChange={(e) => setData({ ...data, horaInicioF: e.target.value })}
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
            value={horaFinF}
            type="time"
            id="horaFinF"
            name="horaFinF"
            className="font-primary block w-full"
            onChange={(e) => setData({ ...data, horaFinF: e.target.value })}
          />
        </div>
      </div>
    </>
  );
};

Horarios.propTypes = {
  data: PropType.object,
  setData: PropType.func,
};
