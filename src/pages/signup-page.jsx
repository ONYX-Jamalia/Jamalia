import { createUserWithEmailAndPassword } from "firebase/auth";
import "../../src/index.css";
import { auth, db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [notice, setNotice] = useState(null);

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
            conpanyName: signupData.get("companyName"),
            address: signupData.get("address"),
            contactDetails: signupData.get("contactDetails"),
          });
          setSuccess(true);
          setTimeout(() => {
            navigate("/");
            console.log(userCredential);
          }, 2000);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      .catch((error) => {
        // const errorMsg = error.customData._tokenResponse.error.message;
        if (error) {
          setNotice("error please try again");
          setTimeout(() => {
            setNotice(null);
          }, 3000);
        } else {
          setErrorMessage("Error, please try again");
          setFailed(true);
          setTimeout(() => {
            setFailed(false);
          }, 3000);
        }
      });
  };

  return (
    <>
      {success ? (
        <div
          id="toast-success"
          class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span class="sr-only">Check icon</span>
          </div>
          <div class="ms-3 text-sm font-normal">Singned Up successfully.</div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-success"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      ) : (
        ""
      )}

      {failed ? (
        <div
          id="toast-danger"
          class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            </svg>
            <span class="sr-only">Error icon</span>
          </div>
          <div class="ms-3 text-sm font-normal">{errorMessage}</div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-danger"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      ) : (
        ""
      )}

      {notice ? (
        <div
          id="toast-warning"
          class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
            </svg>
            <span class="sr-only">Warning icon</span>
          </div>
          <div class="ms-3 text-sm font-normal">{notice}</div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-warning"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      ) : (
        ""
      )}

      {success ? (
        ""
      ) : (
        <div className="section__container">
          <section className="signup">
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
          </section>
        </div>
      )}
    </>
  );
}