import React from 'react';
import './title.scss';

export const Title = (props) => {
    return (
        <h1 className="title">{props.text}</h1>
    );
};

