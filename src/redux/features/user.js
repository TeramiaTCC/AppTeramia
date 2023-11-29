import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import app from '../../config/firebaseconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const db = getFirestore(app);

// fetch user
export const fetchUser = createAsyncThunk('usuario/fetchUser', async () => {
  try {
    const credentials = JSON.parse(await AsyncStorage.getItem('userId'));

    const docRef = doc(db, 'usuario', credentials.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      };
    } else {
      console.log('No such document!');
      return null; // You may want to handle the case where the document doesn't exist
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
});

const userDataSlice = createSlice({
  name: 'usuario',
  initialState: {
    usuarioData: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.usuarioData = action.payload;
    });
  },
});

export default userDataSlice.reducer;
