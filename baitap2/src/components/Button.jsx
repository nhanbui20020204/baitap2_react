import React from 'react';

const Button = ({ text, classname = '', onClick }) => {
    return (
        <button className={`btn ${classname}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
