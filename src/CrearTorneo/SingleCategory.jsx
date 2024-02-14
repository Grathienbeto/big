import PropType from "prop-types";

export const SingleCategory = (props) => {
  const { categorias, i } = props;

  const handleChangeCategoria = (event) => {
    categorias[i].categoria = event.target.value;
  };
  const handleChangeGenero = (event) => {
    categorias[i].genero = event.target.value;
  };

  return (
    <div className="border-b-contrast border-dark border-2 pb-5 mt-5">
      <div className="font-primary flex justify-between ">
        <label htmlFor={`categoria${i}`} className="text-light text-xl">
          Categoria {i + 1}
        </label>
        <select name={`categoria${i}`} onChange={handleChangeCategoria}>
          <option value=""></option>
          <option value="7">7º</option>
          <option value="6">6º</option>
          <option value="5">5º</option>
          <option value="4">4º</option>
          <option value="3">3º</option>
          <option value="2">2º</option>
          <option value="1">1º</option>
          <option value="12">S12</option>
        </select>
      </div>
      <div className="flex items-center mt-5 justify-between">
        <h2 className="text-light text-xl">Género</h2>
        <div className="text-light flex gap-5">
          <div className="flex flex-col">
            <label htmlFor={`M${i}`}>Masc</label>
            <input
              type="radio"
              name={`genero${i}`}
              id={`M${i}`}
              value="M"
              onChange={handleChangeGenero}
            />
          </div>
          <div className="flex flex-col  ">
            <label htmlFor={`F${i}`}>Fem</label>
            <input
              type="radio"
              name={`genero${i}`}
              id={`F${i}`}
              value="F"
              onChange={handleChangeGenero}
            />
          </div>
          <div className="flex flex-col  ">
            <label htmlFor={`Mix${i}`}>Mix</label>
            <input
              type="radio"
              name={`genero${i}`}
              id={`Mix${i}`}
              value="Mix"
              onChange={handleChangeGenero}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

SingleCategory.propTypes = {
  data: PropType.object,
  setData: PropType.func,
  elem: PropType.object,
  categorias: PropType.array,
  i: PropType.number,
};
