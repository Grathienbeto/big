import PropType from "prop-types";
export const Pareja = (props) => {
  const { i, elem, handleSearch } = props;

  const handleDelete = async () => {
    const response = await fetch(
      `http://localhost:8080/api/parejas/${elem.id}`,
      {
        method: "DELETE",
      }
    );
    handleSearch();
  };

  return (
    <div className="text-light font-primary border-b-2 border-contrast my-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="border-r-2 border-contrast w-4 py-3">
            <p>{i + 1}</p>
          </div>
          <div className="pl-2">
            <p>{elem.apellidoUno}</p>
            <p>{elem.apellidoDos}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="border-2 rounded-xl px-2" onClick={handleDelete}>
            Eliminar
          </button>
          <button className="border-2 rounded-xl px-2">Editar</button>
        </div>
      </div>
    </div>
  );
};

Pareja.propTypes = {
  elem: PropType.object,
  i: PropType.number,
  handleSearch: PropType.func,
};
