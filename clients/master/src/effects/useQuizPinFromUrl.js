import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setQuizPin} from "../reducers/quizNight/quizNightActionCreators";
import {useParams} from "react-router-dom";

export const useQuizPinFromUrl = () => {
    const dispatch = useDispatch();
    const quizPin = Number(useParams().quizPin);
    useEffect(() => {
        dispatch(setQuizPin(quizPin));
    }, [quizPin, dispatch]);
};
