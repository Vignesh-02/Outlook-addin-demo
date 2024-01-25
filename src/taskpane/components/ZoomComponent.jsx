import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const ZoomComponent = () => {
    const [fontSize, setFontSize] = useState(14); // Default font size 

    const increaseFontSize = () => {
        if (fontSize < 20) setFontSize(fontSize + 1);
    };

    const decreaseFontSize = () => {
        if (fontSize > 14) setFontSize(fontSize - 1);
    };

    return (
        <div>
            <Button onClick={decreaseFontSize} variant="contained" color="primary">-</Button>
            <Button onClick={increaseFontSize} variant="contained" color="primary">+</Button>
            <p style={{ fontSize: `${fontSize}px` }}>
                This text will change its font size.
            </p>
        </div>
    );
};

export default ZoomComponent;
