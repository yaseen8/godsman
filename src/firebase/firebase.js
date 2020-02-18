import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBzhO_rGZPO7BVu5LMIt_6MKl6bSpWGQuE',
  authDomain: 'godsman.firebaseapp.com',
  databaseURL: 'https://godsman.firebaseio.com',
  projectId: 'godsman',
  storageBucket: 'godsman.appspot.com',
  messagingSenderId: '248214315679',
  appId: '1:248214315679:web:908a4296472036ffb7f8aa',
  measurementId: 'G-FPZBCNENPJ',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
