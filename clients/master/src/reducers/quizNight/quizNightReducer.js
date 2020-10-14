import {createReducer} from 'shared/reducers/createReducer';
import { Actions } from '../../actions';

const initialState = {};

export const quizNightReducer = createReducer((state = initialState, action) => {
    switch(action.type) {
        case Actions.ON_OPEN_QUIZ_NIGHT:
            state = {
                quizPin: action.payload
            }
            break;
        default: return state;
    }
    return state;
});