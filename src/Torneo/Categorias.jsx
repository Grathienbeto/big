import PropType from "prop-types";

export const Categorias = (props) => {
  const { elem, i, active, handleSearch, setUpdating } = props;

  return (
    <div>
      <div>
        <button
          className={`flex text-lg px-2 rounded-md w-14 text-center ${
            active === i
              ? "bg-light text-primaryDark font-bold"
              : "bg-dark text-light"
          }`}
          onClick={() => {
            handleSearch(i);
            setUpdating(false);
          }}
        >
          <h2 className=" font-primary">{elem.categoria}º</h2>
          <h2 className=" font-primary">{elem.genero}</h2>
        </button>
      </div>
    </div>
  );
};

Categorias.propTypes = {
  elem: PropType.object,
  i: PropType.number,
  active: PropType.number,
  setActive: PropType.func,
  handleSearch: PropType.func,
  setUpdating: PropType.func,
};
