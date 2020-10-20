import React from 'react';
import './chosen-categories-panel.scss';
import {Panel} from "../Panel/Panel";
import {useSelector} from 'react-redux';

export const ChosenCategoriesPanel = (props) => {
    const chosenCategories = useSelector(state => state.category.chosenCategories);

    return (
        <Panel
            header="Gekozen categoriën"
            rows={chosenCategories}>
        </Panel>
    );
};