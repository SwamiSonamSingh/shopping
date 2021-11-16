import firebase from "firebase"
  const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyDRtOcIsOA0slIofpk5FHUajT3DVFxYeuw",
    authDomain: "fir-22c5a.firebaseapp.com",
    projectId: "fir-22c5a",
    storageBucket: "fir-22c5a.appspot.com",
    messagingSenderId: "306813057365",
    appId: "1:306813057365:web:f92b7f53669dc9682257dc",
    measurementId: "G-7KV80QFJ5J"
  });
  const db=firebase.firestore();
  export {db};