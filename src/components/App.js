import React, {Component} from 'react';
import Header from './Header'
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Steve",
        score: 1,
        id: 1
      },
      {
        name: "Guil",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };
  
    prevPlayerId = 4;
    
    handleAddPlayer = (name) => {
        this.setState( prevState => ({
            players: [
                ...prevState.players, //All players already in list
                {
                name,
                score: 0,
                id: this.prevPlayerId += 1
                }
            ]
        }));
    }
    handleRemovePlayer = (id) => {
        this.setState( prevState => ({
            players: prevState.players.filter(p => p.id !== id)
        }));
    }
    
    handleScoreChange = (index, delta) => {
        this.setState( prevState => ({
            score: prevState.players[index].score += delta
        }));
    }
    
    getHighestScore = () => {
        let highestScore = this.state.players.reduce((score, player) => {
            return Math.max(score, player.score)
        }, 0);
        
        if (highestScore) {
            return highestScore;
        }
        return null;
    }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map((player, index) =>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            isHighScore={this.getHighestScore() === player.score} //Must use () at funtion end to evaluate
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
