import React from 'react';

const Counter = ({round, index, changeScore}) => { //Destructuring...
    
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
            <span className="counter-score">{round}</span>
            <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
        </div>
    );
}

export default Counter;