import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const auth = getAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const signinData = new FormData(event.target);

    const email = signinData.get('email');
    const password = signinData.get('password');
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    
      const user = userCredential.user;
      // Redirect to dashboard 
       window.location.href = "/dashboard";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Wrong email or password!!', error);
      
    });
  };

  return (
    <>
      <div className="font-[sans-serif] text-[#333]">
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-md w-full border py-8 px-6 rounded border-gray-300 bg-white">
            <form onSubmit={handleSubmit}>
              <div className="mb-12">
                <h3 className="text-3xl items-center font-bold">Welcome Back</h3>
                <p className="text-sm mt-4">Don't have an account <Link to="/signup" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
              </div>
              <div>
                <label className="text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input autoComplete="on" name="email" type="text" required className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none" placeholder="Enter email" />
                  <i className="fa-regular fa-envelope w-[18px] h-[18px] absolute right-2"></i>
                </div>
              </div>
              <div className="mt-8">
                <label className="text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input autoComplete="off" name="password" type="password" required className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none" placeholder="Enter password" />
                  <i className="fa-solid fa-lock w-[18px] h-[18px] absolute right-2 cursor-pointer"></i>
                </div>
              </div>
              <div class="flex items-center justify-between gap-2 mt-5">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label for="remember-me" class="ml-3 block text-sm">
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="" class="text-blue-600 font-semibold text-sm hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="mt-12">
                <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Sign in
                </button>
              </div>
              <div class="space-x-8 flex justify-center">
              <p class="my-8 text-sm text-gray-400 text-center">or continue with</p>
                <button type="button"
                  class="border-none outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" class="inline" viewBox="0 0 512 512">
                    <path fill="#fbbd00"
                      d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                      data-original="#fbbd00" />
                    <path fill="#0f9d58"
                      d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                      data-original="#0f9d58" />
                    <path fill="#31aa52"
                      d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                      data-original="#31aa52" />
                    <path fill="#3c79e6"
                      d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                      data-original="#3c79e6" />
                    <path fill="#cf2d48"
                      d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                      data-original="#cf2d48" />
                    <path fill="#eb4132"
                      d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                      data-original="#eb4132" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};
