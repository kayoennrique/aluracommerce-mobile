import { createContext, useState } from 'react';
import { dark, light } from '../globalStyles';

export const ContextTheme = createContext({});

export function ProviderTheme({ children }) {
  const [currentTheme, setCurrentTheme] = useState('dark');

  return (
    <ContextTheme.Provider value={{
      currentTheme,
      setCurrentTheme
    }}>
      {children}
    </ContextTheme.Provider>
  );
}