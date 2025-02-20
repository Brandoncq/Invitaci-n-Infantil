import { combineReducers } from "@reduxjs/toolkit";
import codeqrSlice from "./slice.store";

const combineRootReducer = combineReducers({
	codeqr: codeqrSlice,
});
const rootReducer = (state: any, action: any) => {
	if(action.type === "DESTROY_SESSION"){
	  state = undefined;
	}
	return combineRootReducer(state, action);
  }
export default rootReducer;
