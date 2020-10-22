import {SharedActions} from "../actions";

export const changeTitle = newTitle => {
    return {type: SharedActions.CHANGE_TITLE, payload: newTitle};
};

export const changeRoundNumber = roundNumber => {
    return {type: SharedActions.NEXT_ROUND, payload: roundNumber};
};