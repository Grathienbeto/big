import PropType from "prop-types";
import { Pareja } from "./Pareja";

export const DisplayParejas = ({
  parejas,
  handleSearch,
  updating,
  setUpdating,
}) => {
  return updating === false ? (
    <div>
      {parejas.length > 0 ? (
        <div>
          {parejas.map((elem, i) => (
            <Pareja
              i={i}
              key={i}
              elem={elem}
              handleSearch={handleSearch}
              setUpdating={setUpdating}
            />
          ))}
        </div>
      ) : (
        <div className="mt-3">
          <h2 className="text-light">No hay parejas inscriptas</h2>
        </div>
      )}
    </div>
  ) : (
    <>VERDADERO</>
  );
};

DisplayParejas.propTypes = {
  parejas: PropType.array,
  handleSearch: PropType.func,
  updating: PropType.bool,
  setUpdating: PropType.func,
};

/*
<>

</>
*/
