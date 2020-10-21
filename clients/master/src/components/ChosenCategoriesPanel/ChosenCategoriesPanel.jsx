import React from 'react';
import './chosen-categories-panel.scss';
import {Panel} from "../Panel/Panel";
import {useSelector, useDispatch} from 'react-redux';
import {Button} from "react-bootstrap";
import {ChosenCategoryRow} from "./ChosenCategoryRow/ChosenCategoryRow";
import {submitCategories} from "../../reducers/category/categoryActionCreators";
import {useHistory} from 'react-router-dom';

export const ChosenCategoriesPanel = (props) => {
    const chosenCategories = useSelector(state => state.category.chosenCategories.slice().sort());
    const quizPin = useSelector(state => state.quizNight.quizPin);
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmitCategories = () => {
        dispatch(submitCategories(quizPin, chosenCategories, history));
    };

    return (
        <Panel
            header="Gekozen categorieën"
            rows={chosenCategories.map(x =>
                <ChosenCategoryRow key={x} category={x}/>
            )}>
            <Button variant="primary"
                    disabled={chosenCategories.length !== 3}
                    className="full-width"
                    onClick={onSubmitCategories}>
                Start quiz ronde
            </Button>
        </Panel>
    );
};