import PropType from "prop-types";
import { useState } from "react";
import { AgregarParejasForm } from "./AgregarParejasForm";

export const AgregarParejas = ({
  dateDiff,
  categoria,
  handleSearch,
  active,
  setActive,
}) => {
  const initialDataPareja = {
    categoriaId: categoria.id,
    criptic: categoria.criptic,
    apellidoUno: "",
    apellidoDos: "",
    disponibilidad: 1,
    IhorarioD1: "",
    FhorarioD1: "",
    IhorarioD2: "",
    FhorarioD2: "",
    IhorarioD3: "",
    FhorarioD3: "",
    IhorarioD4: "",
    FhorarioD4: "",
    IhorarioD5: "",
    FhorarioD5: "",
  };

  const [parejaFinal, setParejaFinal] = useState(initialDataPareja);
  // rama produccion
  return (
    <div className="mt-5 font-primary">
      <AgregarParejasForm
        dateDiff={dateDiff}
        parejaFinal={parejaFinal}
        setParejaFinal={setParejaFinal}
        handleSearch={handleSearch}
      />
    </div>
  );
};

AgregarParejas.propTypes = {
  dateDiff: PropType.number,
  categoria: PropType.string,
  setDisplay: PropType.func,
  handleSearch: PropType.func,
};
