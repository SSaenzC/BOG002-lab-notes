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

  function emailAndPasswordSignUp(email, password, name) {
    const register = auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user.updateProfile({ displayName: name });
      })
      .catch((error) => {
        const errorMessage = error.message;
        return {
          error: true,
          message: errorMessage,
        };
      });
    return register;
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

  function logOut() {
    return auth.signOut();
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
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
