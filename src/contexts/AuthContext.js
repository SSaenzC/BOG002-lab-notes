import React, { useContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function emailAndPasswordSignUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function logIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function googleLogIn() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(googleProvider).then((result) => {
      // eslint-disable-next-line no-console
      console.log(result);
    });
  }

  function facebokLogIn() {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    return auth.signInWithPopup(facebookProvider).then((result) => {
      // eslint-disable-next-line no-console
      console.log(result.user);
    });
  }

  useEffect(() => {
    const notLogedIn = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return notLogedIn;
  }, []);

  const value = {
    currentUser,
    emailAndPasswordSignUp,
    googleLogIn,
    facebokLogIn,
    logIn,
  };

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  );
}
