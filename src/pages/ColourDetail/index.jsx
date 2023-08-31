import React from 'react';
import { useParams } from 'react-router-dom';

const ColourDetail = () => {
    const { color } = useParams();

    return (
        <div style={{ background: color, height: "100vh" }}>
            <h1>{color}</h1>
        </div>
    );
}

export default ColourDetail;
