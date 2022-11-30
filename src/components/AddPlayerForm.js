import React, {Component} from 'react';

class AddPlayerForm extends Component {
    
    playerInput = React.createRef();
    
    handleAddPlayer = (event) => {
        const {addPlayer} = this.props; // Destructuring...
        event.preventDefault();
        addPlayer(this.playerInput.current.value);
        event.currentTarget.reset(); //Resets textfield
    }
    
    render() {
        return (
          <div className="add-player-form">
            <form onSubmit={this.handleAddPlayer} >
                <input
                    type="text"
                    ref={this.playerInput}
                    placeholder="player name"
                />
                
                <input
                    type="submit"
                    value="Add Player"
                />
            </form>
            </div>
        );
        
    }
}

export default AddPlayerForm;