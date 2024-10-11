import React, { useState } from "react";
import useCounter from "../../customHook/useCounter";

const ButtonCounter = () => {
  let [counter, increment] = useCounter();
  //   let [counter, setCounter] = useState(0);

  //   let increment = () => {
  //     setCounter((prevcount => prevcount + 1));
  //   };

  return (
    <div>
      <button onClick={increment}>{counter} times</button>
    </div>
  );
};

export default  ButtonCounter;
