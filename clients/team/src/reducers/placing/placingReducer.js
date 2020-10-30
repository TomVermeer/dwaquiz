import {createReducer} from "shared/reducers/createReducer";
import {Actions} from "../../actions";

const initialState = {};
export const placingReducer = createReducer((state = initialState, action) => {
   switch(action.type) {
       case Actions.ON_PLACING_RECEIVED:
           state = action.payload;
           break;
       default: return state;
   }
   return state;
});