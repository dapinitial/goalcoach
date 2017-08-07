import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyCVuc6wvfJjTUt5vlUuQDNRt6x9S0cJmWc",
   authDomain: "goalcoach-8d8a3.firebaseapp.com",
   databaseURL: "https://goalcoach-8d8a3.firebaseio.com",
   projectId: "goalcoach-8d8a3",
   storageBucket: "",
   messagingSenderId: "443324616454"
 };

export const firebaseApp = firebase.initializeApp(config);
