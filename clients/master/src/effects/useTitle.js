import {changeTitle} from "shared/reducers/sharedActionCreators";
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';

export const useTitle = title => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeTitle(title))
    }, [title, dispatch])
};