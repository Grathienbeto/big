import PropType from "prop-types";
export const HorarioDia = (props) => {
  const { dia, parejaFinal, setParejaFinal } = props;
  let extension = "";
  switch (dia) {
    case 1:
      extension = "uno";
      break;
    case 2:
      extension = "dos";
      break;
    case 3:
      extension = "tre";
      break;
    case 4:
      extension = "cua";
      break;
    case 5:
      extension = "cin";
      break;
  }

  return (
    <div className="mt-3">
      <h4 htmlFor="time1" className="text-light">
        Horarios Dia {dia}
      </h4>

      <div className="flex justify-between items-baseline my-2">
        <label htmlFor="time1" className="text-light text-xs">
          Inicio
        </label>
        <input
          type="time"
          id={`horarioI${extension}`}
          name={`horarioI${extension}`}
          onChange={(e) =>
            setParejaFinal({
              ...parejaFinal,
              [`horarioI${extension}`]: e.target.value,
            })
          }
        />
        <label htmlFor="time2" className="text-light text-xs">
          Fin
        </label>
        <input
          type="time"
          id={`horarioF${extension}`}
          name={`horarioF${extension}`}
          onChange={(e) =>
            setParejaFinal({
              ...parejaFinal,
              [`horarioF${extension}`]: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

HorarioDia.propTypes = {
  dia: PropType.number,
  parejaFinal: PropType.object,
  setParejaFinal: PropType.func,
};
