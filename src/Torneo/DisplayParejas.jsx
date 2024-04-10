import PropType from "prop-types";
import { useState } from "react";
import { Pareja } from "./Pareja";
import { EditarPareja } from "./EditarPareja";

export const DisplayParejas = ({
  parejas,
  handleSearch,
  updating,
  setUpdating,
}) => {
  const [editPareja, setEditPareja] = useState({});

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
              setEditPareja={setEditPareja}
              editPareja={editPareja}
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
    <EditarPareja editPareja={editPareja} setEditPareja={setEditPareja} />
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
