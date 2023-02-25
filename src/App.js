import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./styles/styles.css";
import { LanguagesContextProvider } from "./contexts/langContext";

function App() {
  return (
    <Router>
      <LanguagesContextProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </div>
      </LanguagesContextProvider>
    </Router>
  );
}

export default App;
