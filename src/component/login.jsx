import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const Login = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-4  w-1/2">
      <div className="flex flex-col items-center  px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-500">
          RevoTrans
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 text-gray-500">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-500 md:text-2xl ">
              Sign In
            </h1>
            <form className="space-y-4 md:space-y-6" action="http://127.0.0.1:8000">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 ">Email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johndoe@gmail.com" required="" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-500 ">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-500 ">Confirm password</label>
                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
              </div>
              <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-8 px- overflow-hidden   text-gray-500 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm text-center ml-20 text-2xl my-7 font-bold">
              <span class="relative px-12 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">SIGN IN
              </span>
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Reset password? <a href="/component/passwordreset" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Reset password</a></p>
            </form>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login; 