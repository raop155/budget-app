// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyC314xAhY0_gDdwuqHFV59uGIW34g_2yX8',
  authDomain: 'budget-ef50f.firebaseapp.com',
  databaseURL: 'https://budget-ef50f.firebaseio.com',
  projectId: 'budget-ef50f',
  storageBucket: 'budget-ef50f.appspot.com',
  messagingSenderId: '451723527989',
  appId: '1:451723527989:web:27e1b60cdd24f20309ae7c',
  measurementId: 'G-YFBCKN93LX',
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

database
  .ref()
  .set({
    name: 'Ricardo Alberto Olarte Puell',
    age: 26,
    isSingle: false,
    location: {
      country: 'Peru',
      city: 'Lima',
    },
  })
  .then(() => {
    console.log('Data is saved!');
  })
  .catch((error) => {
    console.log('This failed', error);
  });

// database.ref('age').set(29);
// database.ref('location/country').set('New Zealand');

database
  .ref('attributes')
  .set({
    height: 173,
    weight: 75,
  })
  .then(() => {
    console.log('Data is saved!');
  })
  .catch((error) => {
    console.log('This failed', error);
  });

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
