import React, { Component } from "react";

class AddPlayerForm extends Component {
  playerInput = React.createRef();

  handleAddScore = (event) => {
    const { addPlayer } = this.props; // Destructuring...
    event.preventDefault();
    addPlayer(this.playerInput.current.value);
    event.currentTarget.reset(); //Resets textfield
  };

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.handleAddPlayer}>
          <input
            type="numeric"
            ref={this.playerInput}
            placeholder="player"
            pattern="[0-9]*"
            inputMode="numeric"
          />

          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
}

export default AddPlayerForm;
