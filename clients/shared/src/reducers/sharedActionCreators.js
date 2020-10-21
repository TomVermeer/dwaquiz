import {SharedActions} from "../actions";

export const changeTitle = newTitle => {
    return {type: SharedActions.CHANGE_TITLE, payload: newTitle};
};