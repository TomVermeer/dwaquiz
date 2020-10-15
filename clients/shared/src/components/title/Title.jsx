import React from 'react';
import {useSelector} from 'react-redux';
import './title.scss';

export const Title = () => {
    const title = useSelector(state => state.shared.title);
    return (
        <h1 className="title">{title}</h1>
    );
};

