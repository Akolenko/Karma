import { combineReducers } from "redux";
import  bidsSlice  from "../../features/bidsSlice";

export const rootReducer = combineReducers({
bids: bidsSlice
})