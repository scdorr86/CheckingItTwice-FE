import { createContext, useContext, useState } from 'react';

const ContextTest = createContext();

export const ProviderComponent = ({ children }) => {
  const [contextVariable, setContextVariable] = useState();

  return (
    <ContextTest.Provider value={{ contextVariable, setContextVariable }}>
      {children}
    </ContextTest.Provider>
  );
};

export const useMyContextTest = () => useContext(ContextTest);
