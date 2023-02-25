import React, { useContext } from "react";
import { LanguagesContext } from "../../../contexts/langContext";

const Width = () => {
  const { selectedScript } = useContext(LanguagesContext);

  return (
    <>
      {selectedScript && selectedScript === "latin" && (
        <div className="tip-bloc">
          <p>
            <code>max-width</code> should between <strong>45</strong> and{" "}
            <strong>75ch</strong>.
          </p>
        </div>
      )}

      {selectedScript && selectedScript === "arabic" && (
        <div className="tip-bloc">
          <p>
            <code>max-width</code> should not be more than <strong>50ch</strong>
            .
          </p>
        </div>
      )}
    </>
  );
};

export default Width;
