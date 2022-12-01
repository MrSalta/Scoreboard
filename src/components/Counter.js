import React from "react";

const Counter = ({ round, index, changeRound }) => {
  //Destructuring...

  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => changeRound(index, -1)}
      >
        {" "}
        -{" "}
      </button>
      <span className="counter-score">{round}</span>
      <button
        className="counter-action increment"
        onClick={() => changeRound(index, 1)}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Counter;
