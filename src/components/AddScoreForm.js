import React, { Component } from "react";

class AddScoreForm extends Component {
  scoreInput = React.createRef();

  handleAddScore = (event) => {
    const { addScore } = this.props; // Destructuring...
    event.preventDefault();
    addScore(this.scoreInput.current.value);
    event.currentTarget.reset(); //Resets textfield
  };

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.handleAddScore}>
          <input
            type="numeric"
            ref={this.scoreInput}
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

export default AddScoreForm;
