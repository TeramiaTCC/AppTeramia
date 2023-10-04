import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzYhHTqbQE_fXRNUwfOJKIgOpH-KrczQo",
  authDomain: "teramia-ff6b9.firebaseapp.com",
  projectId: "teramia-ff6b9",
  storageBucket: "teramia-ff6b9.appspot.com",
  messagingSenderId: "953751369480",
  appId: "1:953751369480:web:7b48f87c0eff0d84f99ebd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;