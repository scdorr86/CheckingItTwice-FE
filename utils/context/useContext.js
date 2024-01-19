import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ContextTest = createContext();

export const ProviderComponent = ({ children }) => {
  const [contextVariable, setContextVariable] = useState({});

  return (
    <ContextTest.Provider value={{ contextVariable, setContextVariable }}>
      {children}
    </ContextTest.Provider>
  );
};

export const useMyContextTest = () => useContext(ContextTest);

ProviderComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
