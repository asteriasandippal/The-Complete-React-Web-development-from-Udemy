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

// const notes = [{
//   id: '12',
//   title: 'First Note!',
//   body: 'This is my note'
// }, {
//   id: '432',
//   title: 'Another Note!',
//   body: 'This is my note'
// }];

// dataBase.ref('Notes').set(notes);

dataBase.ref('Notes').push({
  title: 'ToDo',
  body: 'React Native, Angular, pYthon'
});

dataBase.ref('Notes/-LEEvB_1QfW2QrgYGBbh').update({
  body: 'Buy food'
});

// dataBase.ref().set({
//   name: 'Sandip Pal',
//   age: 42,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   isSingle: null,
//   location: {
//       city: 'Bangalore',
//       country: 'India'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('This failed', error);
// });

// dataBase.ref().update({
//   stressLevel: 6,
//   'job/company': 'Asteria',
//   'location/city': 'Kolkata'
// });

// dataBase.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was remove');
//   }).catch((error) => {
//     console.log('Did not remove data',  error);
//   });

// dataBase.ref()
//   .once( 'value' )
//   .then((dataSnapshot) => {
//     const val = dataSnapshot.val();
//     console.log('Once', val);
//   });

//   dataBase.ref().on('value', (dataSnapshot) => {
//     console.log(dataSnapshot.val());
//     const val = dataSnapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   });