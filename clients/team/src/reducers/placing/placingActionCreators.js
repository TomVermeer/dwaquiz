import {getAndParse} from "shared/fetchHelpers";
import {Actions} from "../../actions";

const onPlacingReceived = (placing) => {
    return {type: Actions.ON_PLACING_RECEIVED, payload: placing};
};

export const fetchPlacing = (teamName, quizPin) => dispatch => {
    getAndParse(`quiz-nights/${quizPin}/scores/${teamName}`)
        .then(json => dispatch(onPlacingReceived(json)));
};