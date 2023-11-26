import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import app from '../../config/firebaseconfig';


const db = getFirestore(app);

//fecth posts
export const fetchUsers = createAsyncThunk(
    'usuarios/fetchUsers',
    async ()=> {

        const querySnapshot = await getDocs(collection(db,'usuario'));

        const usData = querySnapshot.docs.map((doc) =>({
            id: doc.id,
            ...doc.data(),
        }));
        return usData;
    }
)

const usersDataSlice = createSlice({
    name: 'usuarios',
    initialState: {
        usuariosArray: [],
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.usuariosArray = action.payload;
        })
    }
})

export default usersDataSlice.reducer;