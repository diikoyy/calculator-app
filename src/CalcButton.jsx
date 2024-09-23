import React from "react";

const CalcButton = (props) => {
  return (
    <button
      className={props.className}
      
      /* It's Javascript expression => When the onClick happens, we need to execute
      the callback function that's come via props.onClick & we want to pass it
      the parameter props.value 
      And it will be received the value in the value parameter of handleNumber function 
      in Calculator.jsx => Pass a parameter through to the callback function
      */
     
      onClick={() => props.onClick(props.value)}
    >
      {props.value}
    </button>
  );
};

export default CalcButton;
