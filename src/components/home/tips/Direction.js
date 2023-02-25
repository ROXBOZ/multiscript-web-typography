import React, { useContext } from "react";
import { LanguagesContext } from "../../../contexts/langContext";

const Direction = () => {
  const { selectedScript } = useContext(LanguagesContext);

  return (
    <>
      {selectedScript && selectedScript === "latin" && (
        <div className="tip-bloc">
          <p>
            <code>direction</code> should remain <code>ltr</code>.
          </p>
        </div>
      )}

      {selectedScript && selectedScript === "arabic" && (
        <div className="tip-bloc">
          <p>
            <code>direction</code> should change for <code>rtl</code>.
          </p>
        </div>
      )}
    </>
  );
};

export default Direction;
