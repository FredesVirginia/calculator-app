import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiple = "*",
  divide = "/",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("");
  const [prevNumber, setPrevNumber] = useState("0");
  const [number, setNumber] = useState("0");
  const lastOperation = useRef<Operator | null>(null);

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number} `);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calcularSubResult();
    setPrevNumber(`${subResult}`)
  }, [formula]);

  const clean = () => {
    setNumber("0");
    setPrevNumber("0");
    setFormula("0");
    lastOperation.current = null;
  };

  const toggleSing = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    }
    setNumber("-" + number);
  };

  const deleteLast = () => {
    let currentSign = "";
    let temporalNumber = number;

    if (number.includes("-")) {
      currentSign = "-";
      temporalNumber = number.substring(1);
    }
    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    setNumber("0");
  };

  const setLastnumber = () => {
    if (number.endsWith(".")) {
      setPrevNumber(number.slice(0, -1));
    }

    setPrevNumber(number);
    setNumber("0");
  };
  const divideOperator = () => {
    setLastnumber();
    lastOperation.current = Operator.divide;
  };

  const multipleOperator = () => {
    setLastnumber();
    lastOperation.current = Operator.multiple;
  };
  const addOperator = () => {
    setLastnumber();
    lastOperation.current = Operator.add;
  };
  const restOperator = () => {
    setLastnumber();
    lastOperation.current = Operator.subtract;
  };

  const buildNumber = (numberString: string) => {
    console.log({ numberString });
    //verificar el punto decimal
    if (number.includes(".") && numberString === ".") return;
    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString == ".") {
        return setNumber(number + numberString);
      }

      ///evaluar si es otro cero y no hay punto
      if (numberString == "0" && numberString.includes(".")) {
        return setNumber(number + numberString);
      }

      ///Evaluar si es diferente de cero , no hay punto y es el primer numero
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }

      ///Evitar 000000
      if (numberString == "0" && !number.includes(".")) {
        return;
      }
    }
    setNumber(number + numberString);
  };

  const calcularSubResult = ()=>{
    const [ firstValue , operation , secondValue] = formula.split( " ");
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);
    if(isNaN(num2)) return num1;

    switch(operation){
        case Operator.add:
            return num1 + num2;
        case Operator.divide:
            return num1 / num2;
        case Operator.multiple :
            return num1 * num2;
        case Operator.subtract:
            return num1 - num2;
        default :
        throw new Error ("EERO OPERADOR")
    }
  }

  const calculatorResult = ()=>{
    const result = calcularSubResult();
    setFormula(`${result}`)
    lastOperation.current= null;
    setPrevNumber("0")
  }

  // const buildNumber = (numberString: string) => {
  //   console.log({ numberString });
  //   // verificar el punto decimal
  // //   if (number.includes(".") && numberString === ".") return;

  // //   if (number.startsWith("0") || number.startsWith("-0")) {
  // //     if (numberString == ".") {
  // //       return setNumber(number + numberString);
  // //     }

  // //     if (numberString == "0" && number.includes(".")) {
  // //       return setNumber(number + numberString);
  // //     }

  // //     if (numberString !== "0" && !number.includes(".")) {
  // //       return setNumber(numberString);
  // //     }

  // //     if (numberString == "0" && !number.includes(".")) {
  // //       return;
  // //     }

  // //     return setNumber(number + numberString);
  // //   }

  //   // Aquí agregar caso para cualquier otro número (la clave)
  //   setNumber(number + numberString);
  // };

  return {
    formula,
    number,
    prevNumber,
    buildNumber,
    clean,
    toggleSing,
    deleteLast,
    divideOperator,
    multipleOperator,
    addOperator,
    restOperator,
    calcularSubResult,
    calculatorResult,
  };
};
