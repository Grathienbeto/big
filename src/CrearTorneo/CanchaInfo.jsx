export const CanchaInfo = () => {
  return (
    <>
      <div className="mt-5">
        <h2 className="text-2xl text-light text-center">
          Información de la Cancha
        </h2>
      </div>

      <div className="mt-5">
        <label
          htmlFor="canchas"
          className="text-primaryLight font-primary text-lg"
        >
          Número de canchas
        </label>
        <input
          min={1}
          type="number"
          id="canchas"
          name="canchas"
          autoFocus
          className="font-primary block w-full text-dark"
          // onChange={handleChangeCanchas}
          required={true}
        />
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

      <div className="mt-5">
        <label
          htmlFor="email"
          className="text-primaryLight font-primary text-lg"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="font-primary block w-full"
          // onChange={handleEmail}
          required={true}
        />
      </div>
    </>
  );
};
