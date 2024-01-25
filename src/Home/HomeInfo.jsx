import { Button } from "../Components/Button";

export const HomeInfo = () => {
  return (
    <div className="p-5 mt-5">
      <div>
        <div id="content" className="text-center">
          <div id="slogan" className="border-b-2 pb-5 border-contrast">
            <h2 className="text-light text-3xl">
              La primera herramienta para crear tus torneos de padel
            </h2>
          </div>
          <div className="text-primaryLight mt-10">
            <p className="text-lg">
              Empezá el proceso apretando del boton de "Crear Torneo"
            </p>

            <p className="mt-5 text-lg">
              Ingresa los datos de la cantidad de canchas, las fechas del torneo
              y tu mail, para poder mandarte la información del torneo.
            </p>

            <p className="mt-5 text-lg">
              Por último, podrás empezar a cargar los equipos!
            </p>
          </div>
          <div className="mt-10">
            <Button content={"Crear Torneo"} size={"big"} />
          </div>
        </div>
      </div>
    </div>
  );
};
