import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import app from '../../config/firebaseconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';


const db = getFirestore(app);

//fecth posts
export const fetchPosts = createAsyncThunk(
    'publicacoes/fetchPosts',
    async ()=> {
        const credentials = JSON.parse(await AsyncStorage.getItem("userId"))

        const querySnapshot = await getDocs(collection(db,'publicacoes', credentials.uid, 'userPosts'));

        const uPosts = querySnapshot.docs.map((doc) =>({
            id: doc.id,
            ...doc.data(),
        }));
        return uPosts;
    }
)

const userPSlice = createSlice({
    name: 'publicacoes',
    initialState: {
        publicacoesArray: [],
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.publicacoesArray = action.payload;
        })
    }
})

export default userPSlice.reducer;