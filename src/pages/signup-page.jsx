import { createUserWithEmailAndPassword } from "firebase/auth";
import "../../src/index.css";
import { auth, db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false);

  const signUp = (event) => {
    event.preventDefault();
    const signupData = new FormData(event.target);
    // call firebase Auth signup
    createUserWithEmailAndPassword(
      auth,
      signupData.get("email"),
      signupData.get("password")
    )
      .then(async (userCredential) => {
        // create user in firestore
        try {
            const docRef = await addDoc(collection(db, "users"), {
              userId: userCredential.user.uid,
              conpanyName: signupData.get('companyName'),
              address: signupData.get('address'),
              contactDetails: signupData.get('contactDetails')
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          setLoading(true);
        setTimeout(()=>{
          navigate('/');
          console.log(userCredential);
        }, 2000)  
       
      })
      .catch((error) => {
        setErrorMessage(true)
        console.log(error);
      }).finally(()=> setLoading(false));
  };

  return (
    <>
      <div className="section__container">
        {!loading ? <section className="signup">
          <div className="signup__container">
            <p>Jamalia</p>
            <form onSubmit={signUp} className="form">
              <div>
                <label htmlFor="title">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className=""
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="title">Password*</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className=""
                  placeholder="Enter your passowrd"
                />
              </div>

              <div>
                <label htmlFor="title">Company Name*</label>
                <input
                  type="text"
                  id="companyname"
                  name="companyName"
                  className=""
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="title">Address*</label>
                <textarea
                  type="text"
                  id="address"
                  name="address"
                  className=""
                  placeholder="Enter your company Address"
                />
              </div>

              <div>
                <label htmlFor="title">Contact details*</label>
                <input
                  type="text"
                  id="contactdetails"
                  name="contactDetails"
                  className=""
                  placeholder="Eg. +233 ** *** ****"
                />
              </div>

              <button type="submit" className="submitBtn">
                Sign Up
              </button>
            </form>
          </div>
        </section> : <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span class="font-medium">Success!</span> Sign in successfull.
</div> ? errorMessage : 
  <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
  </div>
</div>
}

        

      </div>
    </>
  );
}
