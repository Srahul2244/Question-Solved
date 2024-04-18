// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

export const themes = {
  light: {
    background: '#ffffff',
    color: '#000000',
  },
  dark: {
    background: '#333333',
    color: '#ffffff',
  },
};

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
