import { createUserWithEmailAndPassword } from "firebase/auth";
import "../../src/index.css";
import { auth, db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function SignUp() {
  const signin = (event) => {
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
          
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="section__container">
        <section className="signup">
          <div className="signup__container">
            <p>Jamalia</p>
            <form onSubmit={signin} className="form">
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
        </section>
      </div>
    </>
  );
}
