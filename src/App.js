import "./styles/styles.css";
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

import { LanguagesContextProvider } from "./contexts/langContext";
import { ModesContext, ModesContextProvider } from "./contexts/ModeContext";

function App() {
  // const { isDarkMode } = useContext(ModesContext);
  // ${isDarkMode ? "darkmode" : ""}
  return (
    <Router>
      <ModesContextProvider>
        <LanguagesContextProvider>
          <div className={`App`}>
            <Header />
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
