import { SingleCategory } from "./SingleCategory";
import { useState, useEffect } from "react";

export const Categoria = ({ data, setData }) => {
  const { numCategorias, categorias } = { ...data };

  return (
    <>
      {categorias.map((elem, i) => (
        <div key={i}>
          <SingleCategory
            elem={elem}
            initialCategories={categorias}
            data={data}
            setData={setData}
            categorias={categorias}
            i={i}
          />
        </div>
      ))}
    </>
  );
};
