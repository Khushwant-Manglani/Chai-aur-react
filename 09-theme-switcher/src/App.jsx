import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import { ThemeBtn, Card } from "./components";
import "./App.css";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightMode = () => setThemeMode("light");
  const darkMode = () => setThemeMode("dark");

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
