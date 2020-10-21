import React from 'react';
import './categories.scss';
import {AllCategoriesPanel} from "../../components/AllCategoriesPanel/AllCategoriesPanel";
import {ChosenCategoriesPanel} from "../../components/ChosenCategoriesPanel/ChosenCategoriesPanel";

export const Categories = (props) => {

    return (
        <div className="space-between">
            <AllCategoriesPanel/>
            <ChosenCategoriesPanel/>
        </div>
    );
};