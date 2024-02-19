import { createContext, useState } from 'react';
import { dark, light } from '../globalStyles';

export const ContextTheme = createContext({});

export function ProviderTheme({ children }) {
  const [currentTheme, setCurrentTheme] = useState('dark');

  const themes = {
    'dark': dark,
    'light': light
  }

  return (
    <ContextTheme.Provider value={{
      currentTheme,
      setCurrentTheme,
      themeChosen: themes[currentTheme]
    }}>
      {children}
    </ContextTheme.Provider>
  );
}