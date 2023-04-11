import React, { useContext } from "react";
import { LanguagesContext } from "../../../contexts/langContext";

const LineHeight = () => {
  const { selectedScript } = useContext(LanguagesContext);

  return (
    <>
      {selectedScript && selectedScript === "latin" && (
        <div className="tip-bloc">
          <p>
            <code>line-height</code> should be set at <strong>1.5</strong> for
            paragraphs. For languages with tall glyphs such as vietnamese, the{" "}
            <code>line-height</code> should be of <strong>2</strong>.
          </p>
        </div>
      )}

      {selectedScript && selectedScript === "arabic" && (
        <div className="tip-bloc">
          <p>
            <code>line-height</code> should be set at <strong>2</strong> for
            paragraphs.
          </p>
        </div>
      )}
    </>
  );
};

export default LineHeight;
