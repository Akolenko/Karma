import { combineReducers } from "redux";
import  bidsSlice  from "../../features/bidsSlice.ts";

export const rootReducer = combineReducers({
bids: bidsSlice
})