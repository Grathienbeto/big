export const CanchaInfo = ({ data, setData }) => {
  const { canchas, numCategorias, email, categorias } = { ...data };

  const handleCategorias = () => {
    while (categorias.length > 0) {
      categorias.pop();
    }
    if (categorias.length === numCategorias) {
      console.log("");
    } else if (categorias.length < numCategorias) {
      for (let i = 0; i < numCategorias; i++) {
        categorias.push({
          categoria: "",
          genero: "",
        });
      }
    }
  };
  handleCategorias();

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
          value={canchas}
          onChange={(e) => setData({ ...data, canchas: e.target.value })}
          type="number"
          id="canchas"
          name="canchas"
          className="font-primary block w-full"
          min={1}
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
          value={numCategorias}
          onChange={(e) => {
            setData({ ...data, numCategorias: e.target.value });
          }}
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
          value={email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          type="email"
          id="email"
          name="email"
          className="font-primary block w-full"
          required={true}
        />
      </div>
    </>
  );
};
