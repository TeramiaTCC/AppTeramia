import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import app from '../../config/firebaseconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';


const db = getFirestore(app);

//fecth posts
export const fetchPosts = createAsyncThunk(
    'usuario/fetchPosts',
    async ()=> {
        const credentials = JSON.parse(await AsyncStorage.getItem("userId"))

        const querySnapshot = await getDoc(collection(db,'publicacoes', credentials.uid, 'userPosts'));

        const uData = querySnapshot.docs.map((doc) =>({
            id: doc.id,
            ...doc.data(),
        }));
        return uData;
    }
)

const userDataSlice = createSlice({
    name: 'usuario',
    initialState: {
        usuarioArray: [],
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.usuarioArray = action.payload;
        })
    }
})

export default userDataSlice.reducer;