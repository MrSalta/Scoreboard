import React from "react";

const ScoreDisplay = ({ score, index, changeScore }) => {
  //Destructuring...

  return (
    <div className="counter">
      <span className="counter-score">{score}</span>
      <button
        className="counter-action increment"
        onClick={() => changeScore(index, 1)}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default ScoreDisplay;
