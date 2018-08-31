import * as firebase from 'firebase';
import '@firebase/firestore';

const config = {
    apiKey: "AIzaSyB-5jcRXStK0ZZIBWUGuPfxeaSRU4HqGlY",
    authDomain: "yoto-d4fee.firebaseapp.com",
    databaseURL: "https://yoto-d4fee.firebaseio.com",
    projectId: "yoto-d4fee",
    storageBucket: "yoto-d4fee.appspot.com",
    messagingSenderId: "661760486032"
  };


  const fire = firebase.initializeApp(config);
  const firestore = fire.firestore();
  const settings = {timestampsInSnapshots: true};
  firestore.settings(settings);
  
  export default firestore;