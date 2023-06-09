import React,{ useRef,useState } from "react";
import { AuthUser } from "../context/AuthContext";
import { Link,useNavigate } from 'react-router-dom'

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordComfirmRef = useRef();
  const [error,setError ]= useState();
  const nav = useNavigate();
  const { createUser } = AuthUser();
  const handleSubmit =async(e)=>{
    e.preventDefault();
    try{
      setError('')
     await createUser(emailRef.current.value,passwordRef.current.value);
     nav("/")
    }catch(err){
      console.log(err.message)
      setError(err.message)
    }
  }
  return (
    <div className="w-full m-auto">
      <section className="bg-slate-200 h-screen dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-2 md:py-8 py-24 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-2xl font-bold leading-tight tracking-tight  text-gray-900 md:text-2xl dark:text-white">
                Sign Up 
              </h1>
              {error && <p>{error}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    ref={emailRef}
                    className="shadow-sm bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    ref={passwordRef}  
                    className="shadow-sm bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="repeat-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Repeat password
                  </label>
                  <input
                    type="password"
                    id="repeat-password"
                    ref={passwordComfirmRef}
                    className="shadow-sm bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Register new account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  If you had already account ?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-primary-600 text-lg hover:underline dark:text-primary-500"
                  >
                    Sign In
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

export default SignUp;
