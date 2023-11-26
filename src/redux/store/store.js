import { configureStore } from '@reduxjs/toolkit';
import { rootUserPosts, rootUserPets, rootUserData } from './reducers';

const store = configureStore({
    reducer: {
        userPosts: rootUserPosts,
        userPets: rootUserPets,
        userData: rootUserData,
    },
})

export { store };