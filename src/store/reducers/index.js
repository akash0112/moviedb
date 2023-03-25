import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import movieReducer from "./MovieReducer";

const rootReducer = combineReducers({
    auth:authReducer,
    movie:movieReducer
})
export default rootReducer