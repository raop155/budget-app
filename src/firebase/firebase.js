// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/database';

// console.log(process.env.NODE_ENV);
// console.log(process.env.REACT_APP_FIREBASE_API_KEY);
// console.log(process.env.REACT_APP_TEST_VAR);
// console.log(process.env.PUBLIC_URL);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

export { firebase, database as default };

// // child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });

//   console.log(expenses);
// });

// database.ref('expenses').push({
//   decription: 'Desc 1',
//   note: 'Note 1',
//   amount: 12565,
//   createAt: 15827418154,
// });

// database.ref('notes').push({
//   title: 'To Do',
//   body: 'Go for a run',
// });

// const onChangeValue = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   // console.log(data.job);
//   const { name } = val;
//   const { title: jobTitle, company: jobCompany } = val.job;

//   // console.log(typeof snapshot.val());
//   console.log(`${name} is a ${jobTitle} at ${jobCompany}`);
// });

// setTimeout(() => {
//   database.ref().update({
//     name: 'Lucciano Olarte Ayllon',
//   });
// }, 2500);

// database
//   .ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log('Error fetching data', error);
//   });

// database
//   .ref()
//   .set({
//     name: 'Ricardo Alberto Olarte Puell',
//     age: 26,
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//       title: 'SW Developer',
//       company: 'Google',
//     },
//     location: {
//       country: 'Peru',
//       city: 'Lima',
//     },
//   })
//   .then(() => {
//     console.log('Data is saved!');
//   })
//   .catch((error) => {
//     console.log('This failed', error);
//   });

// database.ref('age').set(29);
// database.ref('location/country').set('New Zealand');

// database
//   .ref('attributes')
//   .set({
//     height: 173,
//     weight: 75,
//   })
//   .then(() => {
//     console.log('Data is saved!');
//   })
//   .catch((error) => {
//     console.log('This failed', error);
//   });

// database.ref('isSingle').set(null);

/* database
  .ref('isSingle')
  .remove()
  .then(() => {
    console.log('Data was removed');
  })
  .catch((e) => {
    'Error not remove data';
  });
 */

// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//   })
//   .then(() => {
//     console.log('Data updated!');
//   });
