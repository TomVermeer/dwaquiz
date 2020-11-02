import {SharedActions} from "../actions";

const immer = require('immer');
/**
 * Wraps a reducer in immer, making it possible to write muttable code in a reducer
 * Also implements reset behavior
 * @param reducer {Function} reducer with mutable code to make immutable
 * @return {Function} immutable version of reducer
 */
export const createReducer = (reducer) =>
    (state, action) => {
        if (action.type === SharedActions.ON_RESET) {
            state = undefined;
        }
        return immer.produce(state, draft => reducer(draft, action));
    };