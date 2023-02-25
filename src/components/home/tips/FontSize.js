import React, { useContext } from "react";
import { LanguagesContext } from "../../../contexts/langContext";

const FontSize = () => {
  const { selectedScript } = useContext(LanguagesContext);

  return (
    <>
      {selectedScript && selectedScript === "latin" && (
        <div className="tip-bloc">
          <p>
            <code>font-size</code> should be minimum&nbsp;
            <strong>16px</strong>.
          </p>
        </div>
      )}

      {selectedScript && selectedScript === "arabic" && (
        <div className="tip-bloc">
          <p>
            <code>font-size</code> should be minimum&nbsp;
            <strong>18px</strong>.
          </p>
        </div>
      )}
    </>
  );
};

export default FontSize;
