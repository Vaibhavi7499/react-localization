import { createContext } from "react";

export const HomeContext = createContext();

const HomeContainer = ({ children }) => {
    
  const homeValue = {
    firstName:"kishor",
    lastName:"phawade",
    mobNumber:123,
    address:"pune"
  };

  return (
    <>
      <HomeContext.Provider value={homeValue}>
        {children}
        </HomeContext.Provider>
    </>
  );
};

export default HomeContainer;
