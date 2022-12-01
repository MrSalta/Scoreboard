import React, { PureComponent } from "react";
import Counter from "./Counter";
import IsHighestScore from "./IsHighestScore";
import ScoreDisplay from "./ScoreDisplay";

class Player extends PureComponent {
  render() {
    const {
      name,
      round,
      id,
      key,
      score,
      index,
      scoreIndex,
      changeRound,
      changeScore,
      removePlayer,
      show,
      setShow,
    } = this.props; // Destructuring
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          {name}
        </span>
        <Counter round={round} index={index} changeRound={changeRound} />
        <ScoreDisplay
          score={score}
          scoreIndex={scoreIndex}
          changeScore={changeScore}
        />
      </div>
    );
  }
}

export default Player;
