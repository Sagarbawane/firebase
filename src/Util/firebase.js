import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyDl2jbPdaAGMpuHTFMqWZ6fUg0_nXuO9Tk",
    authDomain: "fir-app-56f90.firebaseapp.com",
    databaseURL:"https://fir-app-56f90-default-rtdb.firebaseio.com/",
    projectId: "fir-app-56f90",
    storageBucket: "fir-app-56f90.appspot.com",
    messagingSenderId: "898354774052",
    appId: "1:898354774052:web:e0d8fac1a3b8469dd4d8b1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;