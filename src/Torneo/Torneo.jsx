import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Torneo = () => {
  const { criptic_id } = useParams();
  const SEARCH_URL =
    "http://localhost:8080/api/eventos/search/findEventoByCriptic?criptic";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const [categoria, setCategoria] = useState({});
  const [torneo, setTorneo] = useState();

  // hook para buscar la info de la base de datos
  // la info solo se busca, pero no se hace nada todavia.
  // Faltan los states para guardarla
  useEffect(() => {
    const fetchTorneo = async () => {
      try {
        const response = await fetch(`${SEARCH_URL}=${criptic_id}`);
        const data = await response.json();
        console.log(data);
        setTorneo(data);
      } catch (e) {
        setError(e);
      }
    };
    const fetchCategorias = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/categorias/search/findAllByCriptic?criptic=${criptic_id}`
        );
        const data = await response.json();
        console.log(data._embedded.categorias);
        setCategoria({ ...categoria, ...data._embedded.categorias });
      } catch (e) {
        setError(e);
      }
    };
    fetchTorneo();
    fetchCategorias();
  }, []);

  return (
    <div>
      <h2 className="text-light text-2xl font-primary">Agregar Parejas</h2>
    </div>
  );
};
