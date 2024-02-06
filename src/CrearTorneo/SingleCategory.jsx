export const SingleCategory = (props) => {
  const { data, setData, initialCategories, elem, categorias, i } = props;
  return (
    <div className="border-b-contrast border-dark border-2 pb-5 mt-5">
      <div className="font-primary flex justify-between ">
        <label htmlFor={`categoria${i}`} className="text-light text-xl">
          Categoria {i + 1}
        </label>
        <select name={`categoria${i}`}>
          <option value=""></option>
          <option value="1">7º</option>
          <option value="2">6º</option>
          <option value="3">5º</option>
          <option value="4">4º</option>
          <option value="5">3º</option>
          <option value="6">2º</option>
          <option value="7">1º</option>
          <option value="8">S12</option>
          <option value="9">S14</option>
          <option value="0">S16</option>
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
              value={0}
              className=""
            />
          </div>
          <div className="flex flex-col  ">
            <label htmlFor={`F${i}`}>Fem</label>
            <input
              type="radio"
              name={`genero${i}`}
              id={`F${i}`}
              value={1}
              className=""
            />
          </div>
          <div className="flex flex-col  ">
            <label htmlFor={`Mix${i}`}>Mix</label>
            <input
              type="radio"
              name={`genero${i}`}
              id={`Mix${i}`}
              value={2}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
