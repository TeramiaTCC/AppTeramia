import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDoc, getDocs, getFirestore, orderBy, where } from 'firebase/firestore';
import app from '../../config/firebaseconfig';

const db = getFirestore(app);

//fecth posts
export const fetchAllPosts = createAsyncThunk(
    'posts/fetchAllPosts',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'postagens'));

        const usersPosts = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        
        //console.log("UID:", uid);
        //console.log("Query Snapshot:", querySnapshot);

        return usersPosts;
    }
)

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        postsArray: [],
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllPosts.fulfilled, (state, action) => {
            state.postsArray = action.payload;
        })
    }
})

export default postSlice.reducer;