import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCdqE8FqB73Nq1HI1CbQYF2_Vsy50UfECI',
  authDomain: 'rememberme-c2d9f.firebaseapp.com',
  projectId: 'rememberme-c2d9f',
  storageBucket: 'rememberme-c2d9f.appspot.com',
  messagingSenderId: '1098176943880',
  appId: '1:1098176943880:web:3f321f68efebb29858bebd',
};
  // Initialize Firebase
const firebaseInit = firebase.initializeApp(firebaseConfig);
export const auth = firebaseInit.auth();
export default firebaseInit;
