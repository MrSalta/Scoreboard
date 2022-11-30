import React from 'react';
import Stats from './Stats';
//import Stopwatch from './Stopwatch';
//TODO: #1 Add toggle for stopwatch

const Header = ({title, players}) => {
    return (
      <div className = "header">
            <h1>{title}</h1>
            </div>
    );
}
// Add <Stopwatch> below h1 if using
// Add <Stats players={players}/> if using
// TODO: Add toggle for stopwatch
export default Header;