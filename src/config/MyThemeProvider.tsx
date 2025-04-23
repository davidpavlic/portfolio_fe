import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the props for the ThemeProvider component.
// 'children' represents any valid React child elements.
type ThemeProviderProps = {
  children: ReactNode;
};

// Define the structure of the theme context.
// It includes a boolean for dark mode and a function to update this state.
type ThemeContextType = {
  isDarkMode: boolean;
  //    - React.Dispatch: Indicates that it's a function used to dispatch an action (here, to update state).
  //    - React.SetStateAction<boolean>: Specifies that the action can either be a new boolean value
  //      or a function that takes the current boolean state and returns a new one.
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

// Helper function to determine the initial dark mode setting.
// 1. Checks if a preference is saved in localStorage.
// 2. If not, it uses the system's color scheme preference via a media query.
const getInitialDarkMode = (): boolean => {
  const storedPref = localStorage.getItem('darkMode');
  // converting storedpref to a boolean in the compare
  if (storedPref !== null) return storedPref === 'true';
  // uses the browser's matchMedia API to check the user's system setting.
  return window.matchMedia('(prefers-color-scheme: dark)').matches; 
};

// Create the ThemeContext with default values.
// 'isDarkMode' is initially false, and 'setIsDarkMode' is a placeholder function.
export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  setIsDarkMode: () => {}, 
});

// The ThemeProvider component wraps its children and provides them with dark mode state.
// It manages the state and synchronizes it with both the DOM and localStorage.
export function MyThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);

  // useEffect hook to apply side effects whenever 'isDarkMode' changes.
  useEffect(() => {
    // Toggle the 'dark' CSS class on the <html> element based on the state.
    document.documentElement.classList.toggle('dark', isDarkMode);
    // Save the current dark mode preference in localStorage for persistence.
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  // Render the context provider, making the dark mode state and its updater function
  // available to any nested components that consume this context.
  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}