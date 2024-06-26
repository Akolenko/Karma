import { combineReducers } from "redux";
import counterReducer from  "../../features/counterSlice"
import postsReducer from "../../features/postsSlice"
import  useReducer from "../../../features/userEditProfileSlice";

export const rootReducer = combineReducers({
    counter:  counterReducer,
    posts: postsReducer,
    user: useReducer,
})