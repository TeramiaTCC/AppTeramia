import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDoc, getDocs, getFirestore, orderBy } from 'firebase/firestore';
import app from '../../config/firebaseconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';


const db = getFirestore(app);

//fecth posts
export const fetchPosts = createAsyncThunk(
    'publicacoes/fetchPosts',
    async () => {
        const credentials = JSON.parse(await AsyncStorage.getItem("userId"));
        const uid = credentials.uid;
        const querySnapshot = await getDocs(collection(db, 'postagens'));

        const uPosts = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        // Filtro dos posts com base no userID
        const filteredPosts = uPosts.filter(post => post.userid === uid);

        // Ordenar posts por data (assumindo que 'data' é uma propriedade nos objetos de postagem)
        const sortedPosts = filteredPosts.sort((a, b) => new Date(a.data) - new Date(b.data));

        return sortedPosts;
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