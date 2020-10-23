import React from 'react';
import './categories.scss';
import {AllCategoriesPanel} from "../../components/AllCategoriesPanel/AllCategoriesPanel";
import {ChosenCategoriesPanel} from "../../components/ChosenCategoriesPanel/ChosenCategoriesPanel";
import {useTitle} from "../../effects/useTitle";

export const Categories = (props) => {

    useTitle('Categorieën');

    return (
        <div className="space-between">
            <AllCategoriesPanel/>
            <ChosenCategoriesPanel/>
        </div>
    );
};