import { createContext, useState } from 'react';
import { dark, light } from '../globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export const ContextTheme = createContext({});

export function ProviderTheme({ children }) {
  const [currentTheme, setCurrentTheme] = useState('dark');

  const themes = {
    'dark': dark,
    'light': light
  }

  useEffect(async () => {
    const savedTheme = await AsyncStorage.getItem('@theme');
    if (savedTheme) {
      setCurrentTheme(savedTheme)
    }
  }, [])

  async function saveThemeOnDevice(theme) {
    await AsyncStorage.setItem('@theme', theme)
    setCurrentTheme(theme)
  }

  return (
    <ContextTheme.Provider value={{
      currentTheme,
      setCurrentTheme,
      themeChosen: themes[currentTheme],
      saveThemeOnDevice
    }}>
      {children}
    </ContextTheme.Provider>
  );
}