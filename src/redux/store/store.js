import { configureStore } from '@reduxjs/toolkit';
import { rootUserPosts } from './reducers';

const store = configureStore({
    reducer: {
        userPosts: rootUserPosts,
    },
})

export { store };