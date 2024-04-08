import PropType from "prop-types";
import { Pareja } from "./Pareja";

export const DisplayParejas = ({ parejas, handleSearch }) => {
  return (
    <div>
      {parejas.length > 0 ? (
        <div>
          {parejas.length > 0}
          {parejas.map((elem, i) => (
            <Pareja i={i} key={i} elem={elem} handleSearch={handleSearch} />
          ))}
        </div>
      ) : (
        <div className="mt-3">
          <h2 className="text-light">No hay parejas inscriptas</h2>
        </div>
      )}
    </div>
  );
};

Pareja.propTypes = {
  parejas: PropType.array,
};
