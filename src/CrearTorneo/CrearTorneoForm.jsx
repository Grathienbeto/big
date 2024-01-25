import { useState } from "react";

export const CrearTorneoForm = () => {
  const [canchas, setCanchas] = useState(0);
  const [fechaInicio, setFechaInicio] = useState();
  const [fechaFin, setFechaFin] = useState();
  const [mail, setMail] = useState("");

  const handleChangeCanchas = (e) => {
    // Para asegurarse que sea un Int y no un String
    let intCanchas = parseInt(e.target.value);
    setCanchas(intCanchas);
  };

  const handleChangeFechaInicio = (e) => {
    setFechaInicio(e.target.value);
  };
  const handleChangeFechaFin = (e) => {
    setFechaFin(e.target.value);
  };
  const handleMail = (e) => {
    setMail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(canchas);
    console.log(fechaInicio);
    console.log(fechaFin);
    console.log(mail);
  };

  return (
    <div className="p-5">
      <form action="#">
        <div className="mt-5">
          <h2 className="text-2xl text-light text-center">
            Creación de Torneo
          </h2>
        </div>

        <div className="mt-5">
          <label
            htmlFor="canchas"
            className="text-primaryLight font-primary text-lg"
          >
            Canchas
          </label>
          <input
            type="number"
            id="canchas"
            name="canchas"
            className="font-primary block w-full"
            onChange={handleChangeCanchas}
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="horarios"
            className="text-primaryLight font-primary text-lg"
          >
            Horarios
          </label>
          <input
            type="text"
            id="horarios"
            name="horarios"
            className="font-primary block w-full"
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="fecha_inicio"
            className="text-primaryLight font-primary text-lg"
          >
            Fecha Inicio
          </label>
          <input
            type="date"
            id="fecha_inicio"
            name="fecha_inicio"
            className="font-primary block w-full"
            onChange={handleChangeFechaInicio}
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="fecha_fin"
            className="text-primaryLight font-primary text-lg"
          >
            Fecha Fin
          </label>
          <input
            type="date"
            id="fecha_fin"
            name="fecha_fin"
            className="font-primary block w-full"
            onChange={handleChangeFechaFin}
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
            onChange={handleMail}
          />
        </div>
        <div className="mt-10 flex justify-center">
          <button
            className="border-2 border-contrast text-light font-primary text-xl px-10 py-2 mx-auto rounded-lg"
            type="submit"
            onClick={handleSubmit}
          >
            Crear Torneo
          </button>
        </div>
      </form>
    </div>
  );
};
