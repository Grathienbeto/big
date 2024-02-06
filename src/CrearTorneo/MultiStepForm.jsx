import { useMultiStepForm } from "../assets/useMultiStepForm";
import { useNavigate } from "react-router-dom";
import { CanchaInfo } from "./CanchaInfo";
import { Horarios } from "./Horarios";
import { Categoria } from "./Categoria";
import { useState } from "react";
import { InfoFinal } from "./InfoFinal";

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
  return salt;
};

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

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <CanchaInfo key={0} data={data} setData={setData} />,
      <Categoria key={1} data={data} />,
      <Horarios key={2} data={data} setData={setData} />,
      <InfoFinal key={3} data={data} />,
    ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(JSON.stringify(data));

      const response = await fetch("http://localhost:8080/api/torneos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
    navigate(`/torneo/${data.criptic}`);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) {
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
