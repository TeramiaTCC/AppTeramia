import { configureStore } from '@reduxjs/toolkit';
import { rootUserPosts, rootUserPets, rootUserData, rootUsersData, rootPosts, rootUsersComents } from './reducers';

const store = configureStore({
    reducer: {
        userPosts: rootUserPosts,
        userPets: rootUserPets,
        userData: rootUserData,
        usersData: rootUsersData,
        posts: rootPosts,
        coments: rootUsersComents,
    },
})

export { store };