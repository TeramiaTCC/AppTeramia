import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import app from '../../config/firebaseconfig';

const db = getFirestore(app);

// fetch posts
export const fetchUsers = createAsyncThunk('usuarios/fetchUsers', async () => {
  const querySnapshot = await getDocs(collection(db, 'usuario'));

  const usData = querySnapshot.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .filter((user) => user.usertype === '1' && user.analizeSitu === '1')
    .sort((a, b) => a.nome.localeCompare(b.nome)); // Substitua 'nome' pelo campo que deseja ordenar

  return usData;
});

const usersDataSlice = createSlice({
  name: 'usuarios',
  initialState: {
    usuariosArray: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.usuariosArray = action.payload;
    });
  },
});

export default usersDataSlice.reducer;
