import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Game() {
    const [input, setInput] = useState("");
    const history = useHistory();

    const handleClick = () => {
        if (input === 'Spider') {
            history.push("./winner")
        } else {
            alert("Game Over!")
        }
    }
    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter Your Game Name" />
            <button onClick={handleClick}>Check Game</button>
        </div>
    )
}

export default Game
