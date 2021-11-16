import React from 'react'
import { Link } from "react-router-dom";

function Location() {
    return (
        <div>
            <h3>Let's Start Game</h3>
            <Link to="/game" style={{color:'crimson',fontSize:'30px'}}>Let's Start Game!</Link>
        </div>
    )
}

export default Location
