import { useEffect, useState } from "react";

import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

import FirebaseInitialize from "../Firebase/Firebase.init";
FirebaseInitialize();
const useFirebase = () => {
  const auth = getAuth();
  const [users, setUsers] = useState({});
  const [error, setError] = useState("");
  //google sign in
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUsers(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  //google sign out
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUsers({});
      })
      .catch((error) => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
      if (signedInUser) {
        setUsers(signedInUser);
      }
    });
    return () => unsubscribe;
  }, []);

  return { handleGoogleSignIn, handleGoogleSignOut, users, error };
};

export default useFirebase;
