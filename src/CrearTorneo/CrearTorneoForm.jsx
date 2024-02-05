import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CrearTorneoForm = () => {
  const navigate = useNavigate();
  const [canchas, setCanchas] = useState(0);
  const [fechaInicio, setFechaInicio] = useState();
  const [fechaFin, setFechaFin] = useState();
  const [email, setEmail] = useState("");
  const [cripticId, setCripticId] = useState("");

  // Fx para generar un string de 20 caracteres aleatorios
  const randomGenerator = () => {
    let salt = "";
    const list = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
    for (let i = 0; i < 20; i++) {
      salt += list[Math.floor(Math.random() * list.length)];
    }
    setCripticId(salt);
  };

  const handleChangeCanchas = (e) => {
    let intCanchas = parseInt(e.target.value);

    if (intCanchas <= 0) {
      console.log("Error en la cantidad de canchas");
      return;
    }

    // Agregado aqui la fx para q se genere el codigo aleatorio
    randomGenerator();

    setCanchas(intCanchas);
  };

  const handleEmail = (e) => {
    if (e.target.value === "") {
      console.log("No se puede ingresar un mail vacio");
      return;
    }
    setEmail(e.target.value);
  };

  const handleChangeFechaInicio = (e) => {
    setFechaInicio(e.target.value);
  };

  const handleChangeFechaFin = (e) => {
    setFechaFin(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const torneo = {
      cripticId,
      canchas,
      fechaInicio,
      fechaFin,
      email,
    };

    try {
      const response = await fetch("http://localhost:8080/api/torneos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(torneo),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error submiting form: ", error);
    }

    // CAMBIAR LINK A LA PAGINA DE AGREGAR PAREJAS
    navigate(`/torneo/${cripticId}`);
  };

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit}>
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
            required={true}
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
            type="time"
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
            required={true}
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
            onChange={handleEmail}
            required={true}
          />
        </div>
        <div className="mt-10 flex justify-center">
          <button
            className="border-2 border-contrast text-light font-primary text-xl px-10 py-2 mx-auto rounded-lg"
            type="submit"
          >
            Crear Torneo
          </button>
        </div>
      </form>
    </div>
  );
};
