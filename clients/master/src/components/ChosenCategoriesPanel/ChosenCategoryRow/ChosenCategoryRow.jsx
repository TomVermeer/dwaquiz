import React from 'react';
import './chosen-category-row.scss';
import {Button} from "react-bootstrap";
import {useDispatch} from 'react-redux';
import {removeCategory} from "../../../reducers/category/categoryActionCreators";

export const ChosenCategoryRow = (props) => {
    const dispatch = useDispatch();

    const onRemoveCategory = () => {
        dispatch(removeCategory(props.category));
    };

    return (
        <div className="category-row">
            {props.category}
            <Button variant="danger"
            onClick={onRemoveCategory}>-</Button>
        </div>
    );
};