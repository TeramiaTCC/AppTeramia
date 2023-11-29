import React, { useState } from 'react';
import StackNav from './src/routes/stack';
import { preventAutoHideAsync } from "expo-splash-screen";

import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';

preventAutoHideAsync();

export default function App() {

  return (
      <Provider store={store}>
        <StackNav/>
      </Provider>
  );
}
