import "./styles/styles.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

import { LanguagesContextProvider } from "./contexts/langContext";
import { ModesContextProvider } from "./contexts/ModeContext";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const appContainer = document.querySelector(".App");
    if (isDarkMode) {
      appContainer.classList.remove("lightmode");
      appContainer.classList.add("darkmode");
    } else {
      appContainer.classList.remove("darkmode");
      appContainer.classList.add("lightmode");
    }
  }, [isDarkMode]);

  return (
    <Router>
      <ModesContextProvider>
        <LanguagesContextProvider>
          <div className="App">
            <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            <Routes>
              <Route index element={<Home />} />
            </Routes>
          </div>
        </LanguagesContextProvider>
      </ModesContextProvider>
    </Router>
  );
}

export default App;
