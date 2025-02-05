// ThemeContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

// Provide a default value. This value is only used when a component is not wrapped in the provider,
// which normally shouldn’t happen.
export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  setIsDarkMode: () => {}, // empty function as default
});

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedPref = localStorage.getItem('darkMode');
    if (storedPref !== null) {
      return storedPref === 'true';
    } else if (window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const className = 'dark';
    const rootElement = document.documentElement; // <html> element
    isDarkMode ? rootElement.classList.add(className) : rootElement.classList.remove(className);
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
