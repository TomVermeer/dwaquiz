import { postAndParse } from "shared/fetchHelpers";
import { SharedActions } from "shared/actions";
import { startWebsocket } from "../webSocketHandlers";


export const openQuizNight = (quizpin) => (dispatch) => {
  postAndParse(`scoreboards/${quizpin}`)
    .then((json) =>{
        dispatch(onOpenQuizNight(json))
        startWebsocket(quizpin)
    } 
  );
};

const onOpenQuizNight = (response) => {
  return { type: SharedActions.ON_OPEN_QUIZ_NIGHT, payload: response.quizPin };
};
