import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {changeRoundNumber} from "shared/reducers/sharedActionCreators";

export const useRoundNumberFromUrl = () => {
    const dispatch = useDispatch();
    const roundNumber = useParams().roundNumber;
    useEffect(() => {
        dispatch(changeRoundNumber(Number(roundNumber)));
    }, [roundNumber, dispatch]);
    return roundNumber
};
