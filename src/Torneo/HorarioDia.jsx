import PropType from "prop-types";
export const HorarioDia = (props) => {
  const { dia } = props;
  return (
    <div className="mt-3">
      <h4 htmlFor="time1" className="text-light">
        Horarios Dia {dia}
      </h4>

      <div className="flex justify-between items-baseline my-2">
        <label htmlFor="time1" className="text-light text-xs">
          Inicio
        </label>
        <input type="time" id="time1" name="time1" />
        <label htmlFor="time2" className="text-light text-xs">
          Fin
        </label>
        <input type="time" id="time2" name="time2" />
      </div>
    </div>
  );
};

HorarioDia.propTypes = {
  dia: PropType.string,
};
