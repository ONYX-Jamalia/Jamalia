import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../components/navbar";
import { auth } from "../config/firebase";
import { useEffect, useState } from "react";
export default function Homepage() {
  const [userEmail, setUserEmail] = useState('')
  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        console.log(user);
        setUserEmail(user.email);
        // ...
      } else {
        setUserEmail('');
        // User is signed out
        // ...
      }
    });
  };

  useEffect(getUser, []);
  return (
    <>
      <Navbar />
      <section>
        <i class="fa-regular fa-face-smile"></i>
        <h1 className="font-bold text-2xl">This is our landing page</h1>
      </section>
    </>
  );
}
