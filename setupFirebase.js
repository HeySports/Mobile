import * as React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCQlMdY5FEVcS1uLmWgLKi_pC4hUa4vWA4',
  authDomain: 'hsports-76698.firebaseapp.com',
  projectId: 'hsports-76698',
  storageBucket: 'hsports-76698.appspot.com',
  messagingSenderId: '469450007382',
  appId: '1:469450007382:web:e5eb9264b383cc2debacf7',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default { firebase, auth };
