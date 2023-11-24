import { combineReducers } from "redux";
import userPSlice from '../features/userPosts';


export const rootUserPosts = combineReducers({
    userPosts: userPSlice,
});