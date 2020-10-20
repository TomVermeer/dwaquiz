import {createReducer} from "shared/reducers/createReducer";
import {Actions} from "../../actions";

const initialState = {
    allCategories: [],
    chosenCategories: []
};

export const categoryReducer = createReducer((state = initialState, action) => {
    switch(action.type) {
        case Actions.ON_CATEGORIES_RECEIVED:
            state.allCategories = action.payload;
            break;
        default: return state;
    }
    return state;
});