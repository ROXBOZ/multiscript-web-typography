import React, { useContext } from "react";
import { LanguagesContext } from "../../contexts/langContext";
import Latin from "../nav/Latin";
import Arabic from "../nav/Arabic";

const Titles = () => {
  const { selectedScript } = useContext(LanguagesContext);

  return (
    <div className="title">
      {selectedScript && selectedScript === "latin" && (
        <>
          <p className="pretitle">Latin script</p>
          <Latin />
          <h1>Good CSS practices for accessible multiscript web typography</h1>
        </>
      )}

      {selectedScript && selectedScript === "arabic" && (
        <>
          <p className="pretitle">النص العربي</p>
          <Arabic />
          <h1>
            ممارسات{" "}
            <span className="en" lang="en">
              CSS
            </span>{" "}
            الجيدة للخط العربي على الويب المتعدد اللغات القابل للوصول
          </h1>
        </>
      )}
    </div>
  );
};

export default Titles;
