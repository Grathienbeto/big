export const Categoria = () => {
  return (
    <>
      <div className="mt-5">
        <h2 className="text-2xl text-light text-center">Categorías</h2>
      </div>
      <div className="mt-5">
        <label
          htmlFor="numCategorias"
          className="text-primaryLight font-primary text-lg"
        >
          Número de categorías
        </label>
        <input
          type="number"
          id="numCategorias"
          name="numCategorias"
          className="font-primary block w-full"
          min={1}
          required={true}
        />
      </div>
    </>
  );
};
