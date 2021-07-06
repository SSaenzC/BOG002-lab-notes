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

  function googleLogIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider).then((result) => {
      console.log(result);
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
  };

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  );
}
