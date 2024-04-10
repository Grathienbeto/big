import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Categorias } from "./Categorias";
import { DisplayParejas } from "./DisplayParejas";
import { AgregarParejas } from "./AgregarParejas";
import { Botonera } from "./Botonera";

export const Torneo = () => {
  const { criptic_id } = useParams();
  const SEARCH_URL =
    "http://localhost:8080/api/eventos/search/findEventoByCriptic?criptic";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // active tira un numero del 0 a categoria.length
  const [active, setActive] = useState(0);
  const [torneo, setTorneo] = useState();
  const [categoria, setCategoria] = useState([]);
  const [parejas, setParejas] = useState([]);
  const [dateDiff, setDateDiff] = useState(0);
  const [display, setDisplay] = useState(true);

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

  // fx que se encarga de usar un fetch para buscar las parejas de la categoria seleccionada
  const handleSearch = (i) => {
    setActive(i);
    setDisplay(true);

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

  const handleAgregarACategoria = () => {
    setDisplay(false);
    const fin = torneo.fechaFin.split("T")[0];
    const ini = torneo.fechaInicio.split("T")[0];
    const finDate = new Date(fin);
    const iniDate = new Date(ini);
    const differenceBetweenDates = (finDate - iniDate) / (1000 * 60 * 60 * 24);
    setDateDiff(differenceBetweenDates);
  };

  if (loading) {
    return <h2 className="text-light text-2xl font-primary">Loading...</h2>;
  }

  return (
    <div className="p-5">
      <h2 className="text-light text-2xl font-primary">Evento</h2>

      {/* Display categorias */}
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

      {display ? (
        <DisplayParejas
          parejas={parejas}
          handleSearch={handleSearch}
          display={display}
          setDisplay={setDisplay}
        />
      ) : (
        <AgregarParejas
          dateDiff={dateDiff}
          categoria={categoria[active]}
          handleSearch={handleSearch}
        />
      )}

      {display ? (
        <Botonera handleAgregarACategoria={handleAgregarACategoria} />
      ) : (
        <></>
      )}
    </div>
  );
};

// Notas
/* 
  http://localhost:8080/api/parejas/search/findAllByCategoriaId?categoriaId={categoriaId}
  Link para buscar las parejas de la categoria

*/
