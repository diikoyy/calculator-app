import React, { useState } from "react";
import "./App.css";
import CalcButton from "./CalcButton";

const Calculator = () => {
  const [calc, setCalc] = useState({
    current: "0",
    total: "0",
    isInital: true,
    preOp: "",
  });

  const handleNumber = (value) => {
    let calculateNewString = value;

    // Delete 0 when click another number
    if (!calc.isInital) {
      calculateNewString = calc.current + value;
    }

    setCalc({
      current: calculateNewString,
      total: calc.total,
      isInital: false,
      preOp: calc.preOp,
    });
  };

  const handleOperator = (value) => {
    const totalCalculation = doCalculation();

    // current : Display on screen
    // total: To count
    // isInital: true => Need to clear the display on screen => Avoid overwritten
    // => Start Displaying new number
    setCalc({
      current: totalCalculation.toString(),
      total: totalCalculation.toString(),
      isInital: true,

      // value here is the operator
      preOp: value,
    });
  };

  const doCalculation = () => {
    let totalParseInt = parseInt(calc.total);
    let currentParseInt = parseInt(calc.current);
    
    /* debugger;

    // console.log(state);
    console.log(calc); */

    switch (calc.preOp) {
      case "+":
        totalParseInt += currentParseInt;
        break;
      case "-":
        totalParseInt -= currentParseInt;
        break;
      case "*":
        totalParseInt *= currentParseInt;
        break;
      case "/":
        totalParseInt /= currentParseInt;
        break;
      default:
        totalParseInt = currentParseInt;
    }
    return totalParseInt;
  };

  const handleClear = () => {
    setCalc({
      current: "0",
      total: "0",
      isInital: true,
      preOp: "",
    });
  };

  const renderDisplay = () => {
    return calc.current;
  };

  return (
    <div className="app-container">
      <div className="calculator">
        <div className="display">{renderDisplay()}</div>
        <CalcButton value="7" onClick={handleNumber} />
        <CalcButton value="8" onClick={handleNumber} />
        <CalcButton value="9" onClick={handleNumber} />
        <CalcButton className="operator" value="/" onClick={handleOperator} />

        <CalcButton value="4" onClick={handleNumber} />
        <CalcButton value="5" onClick={handleNumber} />
        <CalcButton value="6" onClick={handleNumber} />
        <CalcButton className="operator" value="*" onClick={handleOperator} />

        <CalcButton value="1" onClick={handleNumber} />
        <CalcButton value="2" onClick={handleNumber} />
        <CalcButton value="3" onClick={handleNumber} />
        <CalcButton className="operator" value="-" onClick={handleOperator} />

        <CalcButton value="C" onClick={handleClear} />
        <CalcButton value="0" onClick={handleNumber} />
        <CalcButton value="=" onClick={handleOperator} />
        <CalcButton className="operator" value="+" onClick={handleOperator} />
      </div>
    </div>
  );
};

export default Calculator;
