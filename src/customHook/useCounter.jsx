import React, { useState } from "react";

const useCounter = () => {
  let [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevcount) => prevcount + 1);
  };

  return [counter, increment];
};

export default useCounter;
