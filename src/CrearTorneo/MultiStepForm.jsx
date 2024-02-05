import { useMultiStepForm } from "../assets/useMultiStepForm";
import { useNavigate } from "react-router-dom";
import { CanchaInfo } from "./CanchaInfo";
import { Horarios } from "./Horarios";
import { Categoria } from "./Categoria";
import { useState } from "react";
import { InfoFinal } from "./InfoFinal";

const INITIAL_DATA = {
  canchas: null,
  email: "",
  fechaInicio: "",
  horaInicioI: "",
  horaFinI: "",
  fechaFin: "",
  horaInicioF: "",
  horaFinF: "",
  categorias: [],
};

export const MultiStepForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(INITIAL_DATA);

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <CanchaInfo key={0} />,
      <Categoria key={1} />,
      <Horarios key={2} />,
      <InfoFinal key={3} />,
    ]);

  const onSubmit = (e) => {
    e.preventDefault();
    next();
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
