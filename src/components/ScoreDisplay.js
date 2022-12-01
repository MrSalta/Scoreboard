import React, { useState } from "react";

const ScoreDisplay = ({ score, scoreIndex, changeScore }) => {
  //Destructuring...
  const [show, setShow] = useState(false);
  return (
    <div className="counter">
      <span className="counter-score">{score}</span>
      <button
        className="counter-action increment"
        onClick={() => setShow(true)}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default ScoreDisplay;
