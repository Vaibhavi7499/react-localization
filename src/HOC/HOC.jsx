import React, { useState } from "react";

const HOC = (HocComponent) => {

  const NewComponent = () => {
    let [counter, setCounter] = useState(0);

    const increment = () => {
      setCounter((prevcount) => prevcount + 1);
    };

    return <HocComponent counter={counter} increment={increment} />;
  };

  return NewComponent;
  
};

export default HOC;
