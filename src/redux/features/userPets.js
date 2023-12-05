import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import app from '../../config/firebaseconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';


const db = getFirestore(app);

//fecth pets
export const fetchPets = createAsyncThunk(
    'pets/fetchPets',
    async ()=> {
        const credentials = JSON.parse(await AsyncStorage.getItem("userId"))

        const querySnapshot = await getDocs(collection(db,'pet', credentials.uid, 'userPets'));

        const uPets = querySnapshot.docs.map((doc) =>({
            id: doc.id,
            ...doc.data(),
        }));
        return uPets.sort((a, b) => a.nome.localeCompare(b.nome));
    }
)

const petSlice = createSlice({
    name: 'pets',
    initialState: {
        petsArray: [],
    },
    
    extraReducers: (builder) => {
        builder
        .addCase(fetchPets.fulfilled, (state, action) => {
            state.petsArray = action.payload;
        })
    }
})

export default petSlice.reducer;