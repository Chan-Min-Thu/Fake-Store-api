import React,{useState,useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthUser } from "../context/AuthContext";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const {logIn} = AuthUser();
  const nav = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      setError('');
      await logIn(emailRef.current.value,passwordRef.current.value)
      nav('/')
    }catch(err){
      setError(err.message)
      console.log(err.message)
    }

  }
  
  return (
    <div className="w-full m-auto">
      <section className="bg-slate-200 h-screen dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 md:py-8 py-24  mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in
              </h1>
              {error && <h1 className="text-red-500">Please login error</h1>}
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    ref={emailRef}
                    className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    ref={passwordRef}
                    placeholder="••••••••"
                    className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </span>
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign in
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-semibold text-primary-600 text-lg hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
