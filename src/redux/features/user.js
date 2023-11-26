import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import app from '../../config/firebaseconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';


const db = getFirestore(app);

//fecth posts
export const fetchUser = createAsyncThunk(
    'usuario/fetchUser',
    async ()=> {
        const credentials = JSON.parse(await AsyncStorage.getItem("userId"))

        const querySnapshot = await getDoc(doc(db,'usuario', credentials.uid));

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
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.usuarioArray = action.payload;
        })
    }
})

export default userDataSlice.reducer;