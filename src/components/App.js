import React, { Component, useState } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
import Modal from "./Modal/Modal";

class App extends Component {
  state = {
    players: [
      {
        name: "Steve",
        round: 1,
        score: 1,
        id: 1,
      },
      {
        name: "Guil",
        round: 1,
        score: 0,
        id: 2,
      },
      {
        name: "Ashley",
        round: 1,
        score: 0,
        id: 3,
      },
      {
        name: "James",
        round: 1,
        score: 0,
        id: 4,
      },
    ],
  };

  prevPlayerId = 4;

  handleAddPlayer = (name) => {
    this.setState((prevState) => ({
      players: [
        ...prevState.players, //All players already in list
        {
          name,
          round: 0,
          score: 0,
          id: (this.prevPlayerId += 1),
        },
      ],
    }));
  };
  handleRemovePlayer = (id) => {
    this.setState((prevState) => ({
      players: prevState.players.filter((p) => p.id !== id),
    }));
  };

  handleScoreChange = (scoreIndex, delta) => {
    this.setState((prevState) => ({
      score: (prevState.players[scoreIndex].score += delta),
    }));
  };

  handleRoundChange = (index, delta) => {
    this.setState((prevState) => ({
      round: (prevState.players[index].round += delta),
    }));
  };

  getHighestScore = () => {
    let highestScore = this.state.players.reduce((score, player) => {
      return Math.max(score, player.score);
    }, 0);

    if (highestScore) {
      return highestScore;
    }
    return null;
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={this.state.players} />

        {/* Players list */}
        {this.state.players.map((player, index, ScoreDisplay) => (
          <Player
            name={player.name}
            round={player.round}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            show={ScoreDisplay.setShow}
            changeRound={this.handleRoundChange}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            isHighScore={this.getHighestScore() === player.score} //Must use () at funtion end to evaluate
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
