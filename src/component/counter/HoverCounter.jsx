import React, { useState } from "react";
import useCounter from "../../customHook/useCounter";
import HOC from "../../HOC/HOC";

const HoverCounter = ({ counter, increment }) => {
  //let [counter, increment] = useCounter();
  //   let [counter, setCounter] = useState(0);

  //   let increment = () => {
  //     setCounter((prevcount => prevcount + 1));
  //   };

  return (
    <div>
      <h1 onMouseOver={increment}>{counter} times</h1>
    </div>
  );
};

export default HOC(HoverCounter);
