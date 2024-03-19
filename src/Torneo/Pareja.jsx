import PropType from "prop-types";
export const Pareja = (props) => {
  const { i, elem } = props;
  return (
    <div className="text-light font-primary mt-3 border-b-2 border-contrast">
      <h4>Equipo {i + 1}</h4>
      <div className="flex justify-around">
        <p>1: {elem.apellidoUno}</p>
        <p>2: {elem.apellidoDos}</p>
      </div>
    </div>
  );
};

Pareja.propTypes = {
  elem: PropType.object,
  i: PropType.number,
};
