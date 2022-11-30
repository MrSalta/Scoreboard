import React from 'react';
import Stats from './Stats';
//import Stopwatch from './Stopwatch';
//TODO: #1 Add toggle for stopwatch

const Header = ({title, players}) => {
    return (
        <header>
            <Stats players={players}/>
            <h1>{title}</h1>
        </header>
    );
}
// Add <Stopwatch> below h1 if using
// TODO: Add toggle for stopwatch
export default Header;