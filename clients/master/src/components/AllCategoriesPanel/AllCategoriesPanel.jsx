import React, {useEffect, useState} from 'react';
import {Panel} from "../../components/Panel/Panel";
import {useDispatch, useSelector} from 'react-redux';
import {addCategory, getCategories} from "../../reducers/category/categoryActionCreators";
import './all-categories-panel.scss';
import {Button} from "react-bootstrap";

export const AllCategoriesPanel = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);
    const categories = useSelector(state => state.category.allCategories);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const onAddCategory = () => {
        dispatch(addCategory(selectedCategory));
        setSelectedCategory(null);
    };

    return (
        <Panel
            header="Categoriën"
            rows={categories}
            onClick={setSelectedCategory}
            selected={selectedCategory}>
            <Button variant="primary" disabled={selectedCategory === null} onClick={onAddCategory}>Toevoegen</Button>
        </Panel>
    );
};