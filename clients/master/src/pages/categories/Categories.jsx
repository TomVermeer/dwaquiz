import React, {useEffect} from 'react';
import './categories.scss';
import {Panel} from "../../components/Panel/Panel";
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from "../../reducers/category/categoryActionCreators";

export const Categories = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const categories = useSelector(state => state.category.allCategories);

  return (
    <Panel
        header="Categoriën"
        rows={categories}>
    </Panel>
  );
};