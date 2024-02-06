import PropType from "prop-types";
import { SingleCategory } from "./SingleCategory";

export const Categoria = ({ data }) => {
  const { categorias } = { ...data };

  return (
    <>
      {categorias.map((elem, i) => (
        <div key={i}>
          <SingleCategory categorias={categorias} i={i} />
        </div>
      ))}
    </>
  );
};

Categoria.propTypes = {
  data: PropType.object,
};
