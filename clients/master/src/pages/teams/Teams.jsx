import React from 'react';
import { useSelector } from 'react-redux';
import './teams.scss';

export const Teams = (props) => {
    const state = useSelector(state => state.quizNight);
    return (
        <p>Teams works {state.quizPin}</p>
    );
} 