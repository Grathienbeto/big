import { useState } from "react";

export function useMultiStepForm(steps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(3);

  function next() {
    setCurrentStepIndex((i) => {
      // el ultimo siguiente, es finalizar. Lo q deberia implementar el submit de la form
      if (i >= steps.length - 1) {
        return i;
      }
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      // Si es menor a 0, deberia redireccionar a la pagina Home
      if (i <= 0) {
        return i;
      }
      return i - 1;
    });
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    next,
    back,
    steps,
    isLastStep: currentStepIndex === steps.length - 1,
    isFirstStep: currentStepIndex === 0,
  };
}
