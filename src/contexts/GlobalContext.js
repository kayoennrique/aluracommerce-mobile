import { createContext, useState } from 'react';

export const GlobalContext = createContext({});

export function InfoProvider({ children }) {
  const amount = 200;
  const [name, setName] = useState("Kayo Ennrique");

  return (
    <GlobalContext.Provider value={{
      amount,
      name,
      setName
    }}>
      {children}
    </GlobalContext.Provider>
  );
}