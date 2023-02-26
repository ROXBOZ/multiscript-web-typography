import { useContext } from "react";
import { LanguagesContext } from "../contexts/langContext";
import { ModesContext } from "../contexts/ModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { selectedScript, setSelectedScript } = useContext(LanguagesContext);
  const { setIsDarkMode } = useContext(ModesContext);

  const handleClick = (e) => {
    setSelectedScript(e.target.value);
  };

  const handleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <header className={`${selectedScript}`}>
      <ul>
        <div className="radio">
          <input
            defaultChecked
            className="form-check-input "
            type="radio"
            id="latin"
            name="alphabet"
            value="latin"
            onClick={handleClick}
          ></input>

          <label htmlFor="latin">
            <span className="en" lang="eng"></span>
            {selectedScript && selectedScript === "latin" && "Latin"}
            {selectedScript && selectedScript === "arabic" && "لاتينيّة"}
          </label>
        </div>
        <div className="radio">
          <input
            className="form-check-input "
            type="radio"
            id="arabic"
            name="alphabet"
            value="arabic"
            onClick={handleClick}
          ></input>
          <label htmlFor="latin">
            <span className="en" lang="eng"></span>
            {selectedScript && selectedScript === "latin" && "Arabic"}
            {selectedScript && selectedScript === "arabic" && "عربيّة"}
          </label>
        </div>
      </ul>

      <button onClick={handleMode}>
        <FontAwesomeIcon icon={faSun} /> switch mode
      </button>
    </header>
  );
};

export default Header;
