import React from 'react';
import './chosen-categories-panel.scss';
import {Panel} from "../Panel/Panel";
import {useSelector} from 'react-redux';
import {Button} from "react-bootstrap";
import {ChosenCategoryRow} from "./ChosenCategoryRow/ChosenCategoryRow";

export const ChosenCategoriesPanel = (props) => {
    const chosenCategories = useSelector(state => state.category.chosenCategories);

    return (
        <Panel
            header="Gekozen categorieën"
            rows={chosenCategories.map(x =>
                <ChosenCategoryRow key={x} category={x}/>
            )}>
            <Button variant="primary"
                    disabled={chosenCategories.length !== 3}
                    className="full-width">
                Start quiz ronde
            </Button>
        </Panel>
    );
};