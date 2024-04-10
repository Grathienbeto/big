import PropType from "prop-types";
import { Pareja } from "./Pareja";

export const DisplayParejas = ({
  parejas,
  handleSearch,
  display,
  setDisplay,
}) => {
  return (
    <div>
      {parejas.length > 0 ? (
        <div>
          {parejas.map((elem, i) => (
            <Pareja
              i={i}
              key={i}
              elem={elem}
              handleSearch={handleSearch}
              display={display}
              setDisplay={setDisplay}
            />
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

DisplayParejas.propTypes = {
  parejas: PropType.array,
  handleSearch: PropType.func,
  display: PropType.bool,
  setDisplay: PropType.func,
};
