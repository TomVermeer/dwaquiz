import {Title} from "shared/components/title/Title";
import React from 'react';
import {useSelector} from 'react-redux';

export const MasterTitle = (props) => {
    const title = useSelector(state => state.shared.title);
    return (
        <Title text={title}/>
    )
};