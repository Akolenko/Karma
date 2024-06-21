import { combineReducers } from "redux";
import counterReducer from  "../../features/counterSlice"
import postsReducer from "../../features/postsSlice"

export const rootReducer = combineReducers({
    counter:  counterReducer,
    posts: postsReducer
})