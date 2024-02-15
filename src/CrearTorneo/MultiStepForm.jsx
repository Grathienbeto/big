import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMultiStepForm } from "../assets/useMultiStepForm";
import { CanchaInfo } from "./CanchaInfo";
import { Horarios } from "./Horarios";
import { Categoria } from "./Categoria";
import { InfoFinal } from "./InfoFinal";

// Para generar el id aleatorio
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
  if (salt !== "") {
    salt = "";
    for (let i = 0; i < 20; i++) {
      salt += list[Math.floor(Math.random() * list.length)];
    }
  }
  return salt;
};

// Objeto inicial
const INITIAL_DATA = {
  criptic: randomGenerator(),
  canchas: "",
  email: "",
  numCategorias: "",
  categorias: [],
  fechaInicio: "",
  horaInicioI: "",
  horaFinI: "",
  fechaFin: "",
  horaInicioF: "",
  horaFinF: "",
};

export const MultiStepForm = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(INITIAL_DATA);

  // Importa todo lo necesario del custo hook multiStepForm
  // En la lista del state del hook, estan todas las paginas del formulario
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    isHorario,
    back,
    next,
  } = useMultiStepForm([
    <CanchaInfo key={0} data={data} setData={setData} />,
    <Categoria key={1} data={data} />,
    <Horarios key={2} data={data} setData={setData} />,
    <InfoFinal key={3} data={data} />,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Eliminar clg despues del segundo sprint
      console.log(JSON.stringify(data));

      // Agrega el evento a la base de datos
      const response = await fetch("http://localhost:8080/api/eventos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Bucle para agregar todas las categorias a la base de datos
      for (let i = 0; i < data.categorias.length; i++) {
        let categoriaInfo = await fetch(
          "http://localhost:8080/api/categorias",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              criptic: data.criptic,
              categoria: data.categorias[i].categoria,
              genero: data.categorias[i].genero,
            }),
          }
        );
      }

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error submiting form: ", error);
    }

    // Redirecciona a la pagina del evento creado, usando la clave aleatoria
    navigate(`/eventos/${data.criptic}`);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Bloque para corroborar q la fecha fin pase la semana de la fecha de inicio
    if (isHorario) {
      let inicio = new Date(data.fechaInicio);
      let fin = new Date(data.fechaFin);
      let difference = fin - inicio;
      let days = Math.ceil(difference / (1000 * 3600 * 24));
      if (days <= 7 && days >= 0) {
        next();
      } else if (data.fechaFin === "") {
        setData({ ...data, fechaFin: data.fechaInicio });
      } else {
        alert("La fecha final no puede ser mayor a dos dias.");
      }
    } else if (!isLastStep) {
      next();
    } else {
      handleSubmit(e);
    }
  };

  return (
    <div className="p-5 font-primary">
      <form onSubmit={onSubmit}>
        <div className="text-light">
          {currentStepIndex + 1} / {steps.length}
        </div>

        <div>{step}</div>

        <div className="flex justify-end mt-5 gap-5">
          <button
            type="button"
            className="border-2 border-contrast rounded-lg py-2 px-4 text-light"
            onClick={!isFirstStep ? back : () => navigate("/")}
          >
            Volver
          </button>
          <button
            type="submit"
            className="border-2 border-contrast rounded-lg py-2 w-[100px] text-light"
          >
            {isLastStep ? "Finalizar" : "Siguiente"}
          </button>
        </div>
      </form>
    </div>
  );
};
