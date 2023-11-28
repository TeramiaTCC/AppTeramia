import { configureStore } from '@reduxjs/toolkit';
import { rootUserPosts, rootUserPets, rootUserData, rootUsersData, rootPosts } from './reducers';

const store = configureStore({
    reducer: {
        userPosts: rootUserPosts,
        userPets: rootUserPets,
        userData: rootUserData,
        usersData: rootUsersData,
        posts: rootPosts,
    },
})

export { store };