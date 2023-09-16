import React, { useEffect, useState } from "react";
import Home from "./View/Home";
import Login from "./View/Login";
import { auth } from "./firebase";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  console.log(user);

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return <div>{!user ? <Login googleSignIn={googleSignIn} /> : <Home />}</div>;
}

export default App;
