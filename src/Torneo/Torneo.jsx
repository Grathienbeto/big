import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Torneo = () => {
  const { criptic_id } = useParams();
  const SEARCH_URL =
    "http://localhost:8080/api/eventos/search/findEventoByCriptic?criptic";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchTorneo = async () => {
      try {
        const response = await fetch(`${SEARCH_URL}=${criptic_id}`);
        const data = await response.json();
        console.log(data);
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
      } catch (e) {
        setError(e);
      }
    };

    fetchTorneo();
    fetchCategorias();
  }, []);

  return <h2 className="text-light text-2xl font-primary">Agregar Parejas</h2>;
};
