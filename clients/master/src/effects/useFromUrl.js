import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {useParams} from 'react-router-dom';

export const useFromUrl = (variable, actionCreator) => {
    const dispatch = useDispatch();
    const value = useParams()[variable];
    useEffect(() => {
        dispatch(actionCreator(value));
    }, [value, dispatch, actionCreator]);
    return value;
};