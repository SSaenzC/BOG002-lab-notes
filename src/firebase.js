import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCdqE8FqB73Nq1HI1CbQYF2_Vsy50UfECI',
  authDomain: 'rememberme-c2d9f.firebaseapp.com',
  projectId: 'rememberme-c2d9f',
  storageBucket: 'rememberme-c2d9f.appspot.com',
  messagingSenderId: '1098176943880',
  appId: '1:1098176943880:web:3f321f68efebb29858bebd',
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const auth = fb.auth();
export const db = fb.firestore();
