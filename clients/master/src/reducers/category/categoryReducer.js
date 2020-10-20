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
        case Actions.ON_CATEGORY_ADD:
            state.chosenCategories.push(action.payload);
            state.allCategories = state.allCategories.filter(x => x !== action.payload);
            break;
        default: return state;
    }
    return state;
});