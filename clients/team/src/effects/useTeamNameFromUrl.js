import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {changeRoundNumber} from "shared/reducers/sharedActionCreators";

export const useTeamNameFromUrl = () => {
    const dispatch = useDispatch();
    const teamName = useParams().teamName;
    useEffect(() => {
        dispatch(changeRoundNumber(Number(teamName)));
    }, [teamName, dispatch]);
    return teamName
};
