import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);

  const handleSubmit = async () => {
    try {
      // fetch url
      const url= process.env.API
      const response = await fetch(url, {
        method: 'POST',
        headers: {},
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Wrong email or password!!');
      }

      //  redirect to another page
      window.location.href = "/dashboard";
    } catch (error) {
      //  display the error message
      setAlert(error.message);
    }
  };

  return (
    <>
      <div className="font-[sans-serif] text-[#333]">
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-md w-full border py-8 px-6 rounded border-gray-300 bg-white">
            <form>
              <div className="mb-12">
                <h3 className="text-3xl items-center font-bold">Welcome Back</h3>
                <p className="text-sm mt-4">Don't have an account <Link to="/signup" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
              </div>
              <div>
                <label className="text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input autoComplete="on" name="email" type="text" required className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <i className="fa-regular fa-envelope w-[18px] h-[18px] absolute right-2"></i>
                </div>
              </div>
              <div className="mt-8">
                <label className="text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input autoComplete="off" name="password" type="password" required className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <i className="fa-solid fa-lock w-[18px] h-[18px] absolute right-2 cursor-pointer"></i>
                </div>
              </div>
              <div className="mt-12">
                <button onClick={handleSubmit} type="button" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};
