import PropType from "prop-types";
export const Botonera = ({ handleAgregarACategoria }) => {
  return (
    <div className="absolute bottom-0 right-7">
      <div className="flex justify-between gap-4">
        <div className="border-2 border-contrast text-light font-primary ">
          <button className="px-5 py-2">Generar Torneo</button>
        </div>
        <div className="border-2 border-contrast text-light font-primary ">
          <button className="px-5 py-2" onClick={handleAgregarACategoria}>
            Agregar Pareja
          </button>
        </div>
      </div>
    </div>
  );
};

Botonera.propTypes = {
  handleAgregarACategoria: PropType.func,
};
