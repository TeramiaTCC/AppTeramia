import { combineReducers } from "redux";
import userPSlice from '../features/userPosts';
import petSlice from '../features/userPets'
import userDataSlice from '../features/user'

export const rootUserPosts = combineReducers({
    userPosts: userPSlice,
});

export const rootUserPets = combineReducers({
    userPets: petSlice,
});

export const rootUserData = combineReducers({
    userData: userDataSlice,
});