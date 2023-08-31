import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Colour = () => {
    const [colours, setColours] = useState(["red", "blue", "green"]);
    const [newColour, setNewColour] = useState('');

    const addColour = () => {
        if (newColour) {
            setColours([...colours, newColour]);
            setNewColour('');
        }
    }

    return (
        <div>
            <h1>Available Colours</h1>
            <ul>
                {colours.map((color, index) => (
                    <li key={index} style={{ background: color, padding: "10px", margin: "5px" }}>
                        <Link to={`${color}`} style={{ color: 'white', textDecoration: 'none' }}>
                            {color}
                        </Link>
                    </li>
                ))}
            </ul>
            <input 
                type="text" 
                placeholder="Enter a new colour" 
                value={newColour} 
                onChange={(e) => setNewColour(e.target.value)} 
            />
            <button onClick={addColour}>Add Colour</button>
            
            <Outlet />   { }
        </div>
    );
}

export default Colour;





