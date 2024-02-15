import PropType from "prop-types";

export const InfoFinal = ({ data }) => {
  const {
    canchas,
    email,
    numCategorias,
    categorias,
    fechaInicio,
    horaInicioI,
    horaFinI,
    fechaFin,
    horaInicioF,
    horaFinF,
  } = { ...data };
  return (
    <div className="mt-5 font-primary">
      <h2 className="text-2xl text-light text-center">
        Información Fase Zonas
      </h2>
      <div className="flex justify-between text-lg mt-5">
        <p className="text-primaryLight">Canchas: </p>
        <p className="text-light">{canchas}</p>
      </div>
      <div className="mt-5">
        <div className="flex justify-between text-lg">
          <p className="text-primaryLight">Email: </p>
          <p className="text-light">{email}</p>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-between text-lg">
          <p className="text-primaryLight">Nº Categorías: </p>
          <p className="text-light">{numCategorias}</p>
        </div>
      </div>
      <div className="mt-3">
        {categorias.map((elem, i) => (
          <div key={i} className="flex mt-2 gap-6 justify-between">
            <div className="text-primaryLight">Categoria {i + 1}</div>
            <div className="flex gap-3">
              <p className="text-light">Categoria: {elem.categoria}º</p>
              <p className="text-light">Genero: {elem.genero}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <div className="flex justify-between text-lg">
          <p className="text-primaryLight">Fecha Inicio: </p>
          <p className="text-light">{fechaInicio}</p>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 text-lg">
            <p className="text-primaryLight">Hora Inicio: </p>
            <p className="text-light">{horaInicioI}</p>
          </div>
          <div className="flex flex-col gap-2 text-lg">
            <p className="text-primaryLight">Hora Fin: </p>
            <p className="text-light">{horaFinI}</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex justify-between text-lg">
          <p className="text-primaryLight">Fecha Fin: </p>
          <p className="text-light">{fechaFin}</p>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 text-lg">
            <p className="text-primaryLight">Hora Inicio: </p>
            <p className="text-light">{horaInicioF}</p>
          </div>
          <div className="flex flex-col gap-2 text-lg">
            <p className="text-primaryLight">Hora Fin: </p>
            <p className="text-light">{horaFinF}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

InfoFinal.propTypes = {
  data: PropType.object,
};
