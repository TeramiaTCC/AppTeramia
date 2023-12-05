import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs, getFirestore, orderBy } from 'firebase/firestore';
import app from '../../config/firebaseconfig';

const db = getFirestore(app);

// fecth posts
export const fetchAllPosts = createAsyncThunk(
  'posts/fetchAllPosts',
  async () => {
    const querySnapshot = await getDocs(
      collection(db, 'postagens'),
      orderBy('timestamp', 'desc') // Order by timestamp in descending order
    );

    const usersPosts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return usersPosts;
  }
);

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    postsArray: [],
  },
  reducers: {
    updatePosts: (action) => {
      state.postsArray = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.postsArray = action.payload;
    });
  },
});

export const { updatePosts } = postSlice.actions;

export default postSlice.reducer;