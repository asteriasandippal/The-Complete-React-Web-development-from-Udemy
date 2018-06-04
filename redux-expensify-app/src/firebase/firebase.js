import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBi1Ii4BBauBozyRAeW2Or8mTCtEIoxq4Q",
    authDomain: "expense-app-9b014.firebaseapp.com",
    databaseURL: "https://expense-app-9b014.firebaseio.com",
    projectId: "expense-app-9b014",
    storageBucket: "expense-app-9b014.appspot.com",
    messagingSenderId: "109624405620"
  };

  firebase.initializeApp(config);

  firebase.database().ref().set({
    name: 'Sandip Pal'
  });