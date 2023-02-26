import React, { useContext } from "react";
import { LanguagesContext } from "../contexts/langContext";

// Components
import Paragraphs from "../components/home/Paragraphs";
import FontSize from "../components/home/tips/FontSize";
import LineHeight from "../components/home/tips/LineHeight";
import Width from "../components/home/tips/Width";
import Direction from "../components/home/tips/Direction";
import Titles from "../components/home/Titles";

const Home = () => {
  const { selectedScript } = useContext(LanguagesContext);

  return (
    <main className={`${selectedScript} `}>
      <div className="container">
        <div>
          <Titles />
          <div className="content">
            <Paragraphs />
            <div className="blocs-container">
              <FontSize />
              <LineHeight />
              <Width />
              <Direction />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
