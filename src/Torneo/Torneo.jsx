import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Categorias } from "./Categorias";
import { DisplayParejas } from "./DisplayParejas";
import { AgregarParejas } from "./AgregarParejas";
import { Pareja } from "./Pareja";

export const Torneo = () => {
  const { criptic_id } = useParams();
  const SEARCH_URL =
    "http://localhost:8080/api/eventos/search/findEventoByCriptic?criptic";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const [active, setActive] = useState(0);
  const [torneo, setTorneo] = useState();
  const [categoria, setCategoria] = useState([]);
  const [parejas, setParejas] = useState([]);

  // hook para buscar la info de la base de datos sobre el TORNEO y las categorias
  useEffect(() => {
    setLoading(true);
    const fetchTorneo = async () => {
      try {
        const response = await fetch(`${SEARCH_URL}=${criptic_id}`);
        const data = await response.json();
        setTorneo(data);
      } catch (e) {
        setError(e);
        console.log(error);
      }
    };
    const fetchCategorias = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/categorias/search/findAllByCriptic?criptic=${criptic_id}`
        );
        const data = await response.json();
        setCategoria([...data._embedded.categorias]);
      } catch (e) {
        setError(e);
        console.log(error);
      }
    };
    fetchTorneo();
    fetchCategorias();
    setLoading(false);
  }, [criptic_id, error]);

  // fx que se encarga de usar un fetch para buscar las parejas de la categoria seleccionada
  const handleSearch = (i) => {
    setActive(i);

    const fetchParejas = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/parejas/search/findAllByCategoriaId?categoriaId=${categoria[i].id}`
        );
        const data = await response.json();

        setParejas([...data._embedded.parejas]);
      } catch (e) {
        console.log(e);
      }
    };
    fetchParejas();
  };

  // Ya no estaria cargando info de entrada, solo cuando el usuario apreta el boton de la categoria
  useEffect(() => {
    const fetchParejas = async () => {
      setParejas([]);
      try {
        const response = await fetch(
          `http://localhost:8080/api/parejas/search/findAllByCategoriaId?categoriaId=${categoria[active].id}`
        );
        const data = await response.json();

        setParejas([...data._embedded.parejas]);
      } catch (e) {
        console.log(e);
      }
    };
    fetchParejas();
  }, [active, categoria]);

  if (loading) {
    return <h2 className="text-light text-2xl font-primary">Loading...</h2>;
  }

  return (
    <div className="p-5">
      <h2 className="text-light text-2xl font-primary">Evento</h2>

      <div className="flex gap-4">
        {categoria.map((elem, i) => (
          <Categorias
            elem={elem}
            i={i}
            key={i}
            active={active}
            setActive={setActive}
            handleSearch={handleSearch}
          />
        ))}
      </div>

      {/* <DisplayParejas /> */}
      {parejas.length > 0 ? (
        <div>
          {parejas.length > 0}
          {parejas.map((elem, i) => (
            <Pareja i={i} key={i} elem={elem} />
          ))}
        </div>
      ) : (
        <div className="mt-3">
          <h2 className="text-light">No hay parejas inscriptas</h2>
        </div>
      )}

      {/* Aca tiene q ir el boton de Agregar Parejas */}

      {/* Aca tiene que aparecer el formulario para agregar las parejas */}
      <AgregarParejas />

      {/* Aca tiene que ir boton de Generar torneo */}
    </div>
  );
};

// Notas
/* 
  HECHO 1. Crear un state => const [active, setActive] = useState()
  HECHO Este state permite darle estilos distintos al boton de la categoria activa.
         Ademas, se renderizaran las parejas agregadas a la categoria activa.

  http://localhost:8080/api/parejas/search/findAllByCategoriaId?categoriaId={categoriaId}
  Link para buscar las parejas de la categoria

  Buscar en el curso fullstack, el componente que era la barra de busqueda de libros. Eso tenia como re renderizar usando useEffect
  cuando se cambiaba un estado

*/

// `http://localhost:8080/api/parejas/search/findAllByCategoriaId?categoriaId=${categoriaId}`
