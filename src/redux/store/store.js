import { configureStore } from '@reduxjs/toolkit';
import { rootUserPosts, rootUserPets, rootUserData, rootUsersData } from './reducers';

const store = configureStore({
    reducer: {
        userPosts: rootUserPosts,
        userPets: rootUserPets,
        userData: rootUserData,
        usersData: rootUsersData,
    },
})

export { store };