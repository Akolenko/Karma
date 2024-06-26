import { combineReducers } from "redux";
import bidsSlice from "../../features/bidsSlice";
import  userBidsSlice  from "../../features/bidsUserSlice.ts";
import userResponseSlice from "../../features/userResponseSlice.ts";
import likeBidsSlice from "../../features/likeBidsSlice.ts";
import messagesSlice from "../../features/messagesSlice.ts";
import roomsSlice from "../../features/roomSlice.ts";

export const rootReducer = combineReducers({
  bids: bidsSlice,
  userBids: userBidsSlice,
  responseBid: userResponseSlice,
  likes: likeBidsSlice,
  messages: messagesSlice,
  rooms: roomsSlice,
})