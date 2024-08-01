import { createContext, useContext } from "react";

// context
export const ThemeContext = createContext({
  themeMode: "light",
  lightMode: () => {},
  darkMode: () => {},
});

// context provider
export const ThemeProvider = ThemeContext.Provider;

// hook to use context
export default function useTheme() {
  return useContext(ThemeContext);
}
