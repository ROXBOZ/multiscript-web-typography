import { useContext } from "react";
import { LanguagesContext } from "../contexts/langContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const Header = ({ toggleDarkMode }) => {
  const { selectedScript, setSelectedScript } = useContext(LanguagesContext);

  const handleClick = (e) => {
    setSelectedScript(e.target.value);
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
      <button className="modeToggler" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={faSun} />
      </button>
    </header>
  );
};

export default Header;
