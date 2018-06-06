import firebase, { database } from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const dataBase = firebase.database();

export { firebase, dataBase as default };




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

// dataBase.ref('Notes').push({
//   title: 'ToDo',
//   body: 'React Native, Angular, pYthon'
// });

// dataBase.ref('Notes/-LEEvB_1QfW2QrgYGBbh').update({
//   body: 'Buy food'
// });

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

// dataBase.ref('Expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 973423234
// });

// dataBase.ref('Expenses').push({
//   description: 'Phone Bill',
//   note: '',
//   amount: 5900,
//   createdAt: 973423234
// });

// dataBase.ref('Expenses').push({
//   description: 'Food Bill',
//   note: '',
//   amount: 1200,
//   createdAt: 973423234
// });

// dataBase.ref('Expenses')
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val());

//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// dataBase.ref('Expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// dataBase.ref('Expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
