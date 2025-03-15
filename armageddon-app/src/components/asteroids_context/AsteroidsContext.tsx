import React, { FC, ReactNode, useState } from 'react';
import { createContext } from 'react';
import { RouterProvider } from 'react-router-dom';

export const AsteroidsContext = React.createContext(null);

type AsteroidsContextProviderProps = {
  children?: ReactNode;
};

export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps> = ({
  children,
}) => {
  const [onlyDangerous, setOnlyDangerous] = useState(false);

  const [selectedDistance, setSelectedDistance] = useState(false);

  const [destroyment, setDestroyment] = useState([]);
  
  return (
    <AsteroidsContext.Provider
      value={{
        onlyDangerous,
        setOnlyDangerous,
        selectedDistance,
        setSelectedDistance,
      }}
    >
      {children}
    </AsteroidsContext.Provider>
  );
};
