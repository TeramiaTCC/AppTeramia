import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import app from '../../config/firebaseconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';


const db = getFirestore(app);

//fecth pets
export const fetchComents = createAsyncThunk(
    'comentarios/fetchComents',
    async ()=> {
        const credentials = JSON.parse(await AsyncStorage.getItem("userId"))

        const querySnapshot = await getDocs(collection(db,'avaliacoes', credentials.uid, 'comentarios'));

        const uComents = querySnapshot.docs.map((doc) =>({
            id: doc.id,
            ...doc.data(),
        }));
        return uComents;
    }
)

const comentSlice = createSlice({
    name: 'comentarios',
    initialState: {
        comentsArray: [],
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchComents.fulfilled, (state, action) => {
            state.comentsArray = action.payload;
        })
    }
})

export default comentSlice.reducer;