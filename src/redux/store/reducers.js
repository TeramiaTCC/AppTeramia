import { combineReducers } from "redux";
import userPSlice from '../features/userPosts';
import petSlice from '../features/userPets'
import userDataSlice from '../features/user'
import usersDataSlice from '../features/usersData'
import postSlice from '../features/posts'

export const rootUserPosts = combineReducers({
    userPosts: userPSlice,
});

export const rootPosts = combineReducers({
    posts: postSlice,
});

export const rootUserPets = combineReducers({
    userPets: petSlice,
});

export const rootUserData = combineReducers({
    userData: userDataSlice,
});

export const rootUsersData = combineReducers({
    usersData: usersDataSlice,
});