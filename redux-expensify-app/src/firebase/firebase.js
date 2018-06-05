import firebase, { database } from "firebase";

const config = {
    apiKey: "AIzaSyBi1Ii4BBauBozyRAeW2Or8mTCtEIoxq4Q",
    authDomain: "expense-app-9b014.firebaseapp.com",
    databaseURL: "https://expense-app-9b014.firebaseio.com",
    projectId: "expense-app-9b014",
    storageBucket: "expense-app-9b014.appspot.com",
    messagingSenderId: "109624405620"
  };

  firebase.initializeApp(config);
  const dataBase = firebase.database();
  dataBase.ref().set({
    name: 'Sandip Pal',
    age: 42,
    isSingle: false,
    location: {
        city: 'Bangalore',
        country: 'India'
    }
  });

  dataBase.ref('age').set(12);
  dataBase.ref('location/city').set('Kolkata');

  dataBase.ref('attributes').set({
    width: 149,
    height: 23
  });
