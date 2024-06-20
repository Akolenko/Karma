import { combineReducers } from "redux";
import bidsSlice from "../../features/bidsSlice";
import  userBidsSlice  from "../../features/bidsUserSlice.ts";
import userResponseSlice from "../../features/userResponseSlice.ts";

export const rootReducer = combineReducers({
  bids: bidsSlice,
  userBids: userBidsSlice,
  responseBid: userResponseSlice,
})