import {getAndParse, postAndParse} from "shared/fetchHelpers";
import {Actions} from "../../actions";
import {Pages} from "../../pages/routerUrls";

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

export const removeCategory = category => {
    return {type: Actions.ON_CATEGORY_REMOVE, payload: category};
};

export const submitCategories = (quizPin, categories, history) => dispatch => {
    postAndParse(`quiz-nights/${quizPin}/rounds`, categories)
        .then(json => {
            history.push(Pages(quizPin).QUESTIONS);
        })
};