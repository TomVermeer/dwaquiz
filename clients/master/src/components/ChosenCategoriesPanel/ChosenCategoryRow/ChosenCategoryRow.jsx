import React from 'react';
import './chosen-category-row.scss';
import {Button} from "react-bootstrap";

export const ChosenCategoryRow = (props) => {
    return (
        <div className="category-row">
            {props.category}
            <Button variant="danger">-</Button>
        </div>
    );
};