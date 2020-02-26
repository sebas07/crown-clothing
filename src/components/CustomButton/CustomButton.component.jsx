import React from 'react';

import './CustomButton.styles.scss';

const CustomButton = ({ children, ...otherButtonProps }) => {
    return (
        <button className='custom-button' { ...otherButtonProps }>
            { children }
        </button>
    );
}

export default CustomButton;
