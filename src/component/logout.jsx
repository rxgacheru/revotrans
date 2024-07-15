import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const Logout = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-500">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-full">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          RevoTrans
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-500 md:text-4xl">
              Signed out successfully!
            </h1>
            <form className="space-y-4 md:space-y-6" action="http://127.0.0.1:8000">
            <div>
                
              
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">Back to <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/component/login">SIGN IN</a></label>
                </div>
              </div>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"></button>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"></button>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"></button>
              
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logout;