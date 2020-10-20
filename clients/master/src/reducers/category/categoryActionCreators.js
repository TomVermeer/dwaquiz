import {getAndParse} from "shared/fetchHelpers";
import {Actions} from "../../actions";

const onReceiveCategories = categories => {
    return {type: Actions.ON_CATEGORIES_RECEIVED, payload: categories};
};

export const getCategories = () => dispatch => {
    getAndParse('categories')
        .then(categories => {
            dispatch(onReceiveCategories(categories));
        });
};

export const addCategory = category => {
    return {type: Actions.ON_CATEGORY_ADD, payload: category};
};