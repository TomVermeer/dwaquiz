import { postAndParse } from "shared/fetchHelpers";
import { SharedActions } from "shared/actions";

export const openQuizNight = (quizpin) => (dispatch) => {
    console.log("in action creator!",quizpin) // oke
  postAndParse(`scoreboards/${quizpin}`)
    .then((json) =>{
        dispatch(onOpenQuizNight(json))
    }
   
  );
};

const onOpenQuizNight = (response) => {
  return { type: SharedActions.ON_OPEN_QUIZ_NIGHT, payload: response.quizPin };
};
