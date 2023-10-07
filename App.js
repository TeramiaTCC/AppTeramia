import React, { useState } from 'react';
import StackNav from './src/routes/stack';
import { preventAutoHideAsync } from "expo-splash-screen";

preventAutoHideAsync();

export default function App() {

  return (
    <StackNav/>
  );
}
