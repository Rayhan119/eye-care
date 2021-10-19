import { useEffect, useState } from "react";

import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

import FirebaseInitialize from "../Firebase/Firebase.init";
FirebaseInitialize();
const useFirebase = () => {
  const auth = getAuth();
  const [users, setUsers] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  //google sign in
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  //google sign out
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUsers({});
      })
      .catch((error) => {});
  };
  //keeps sign in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
      if (signedInUser) {
        setUsers(signedInUser);
      }
    });
    return () => unsubscribe;
  }, []);
  //sign up Email and password
  const signUpEmailPassword = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateNameAndImage();
        setUsers(result.user);
        setError("");
        verifyEmail();
      })
      .catch((error) => {
        setError(error.messege);
      });
  };
  //sign In email and password
  const signInEmailPassword = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUsers(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //Emali and Password
  const getEmail = (e) => {
    setEmail(e?.target?.value);
  };
  const getPassword = (e) => {
    setPassword(e?.target?.value);
  };
  const getName = (e) => {
    setName(e?.target?.value);
  };
  const getImage = (e) => {
    setImage(e?.target?.value);
  };
  //update name and photo url
  const updateNameAndImage = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //verification email
  const verifyEmail = () => {
    const auth = getAuth();
    sendEmailVerification(auth.currentUser).then(() => {
      alert(`An verification Email has been send to this email${email}`);
    });
  };

  return {
    getEmail,
    getPassword,
    getName,
    getImage,
    signUpEmailPassword,
    signInEmailPassword,
    handleGoogleSignIn,
    handleGoogleSignOut,
    users,
    error,
  };
};

export default useFirebase;
