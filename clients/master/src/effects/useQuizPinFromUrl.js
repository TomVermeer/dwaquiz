import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setQuizPin} from "shared/reducers/sharedActionCreators";
import {useParams} from "react-router-dom";

export const useQuizPinFromUrl = () => {
    const dispatch = useDispatch();
    const quizPin = Number(useParams().quizPin);
    useEffect(() => {
        dispatch(setQuizPin(quizPin));
    }, [quizPin, dispatch]);
    return quizPin
};
