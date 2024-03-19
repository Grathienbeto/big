import { AgregarParejasForm } from "./AgregarParejasForm";

export const AgregarParejas = () => {
  return (
    <div className="p-5 font-primary">
      <div id="categoriaTitulo" className="">
        {/* Esto tiene que tener un renderizado distinto segun la categoria que se este cargando */}
        <h3 className="text-light  text-xl">Categoría 1</h3>
      </div>

      <AgregarParejasForm />
    </div>
  );
};
