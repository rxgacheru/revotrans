import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyMTI0MDAzLCJpYXQiOjE3MjIxMjM3MDMsImp0aSI6IjNiOTBkMDBkNTg5NzQxNjZiZDBhZGE5YjhiNjJkYTk2IiwidXNlcl9pZCI6NH0.l8-qpEE9nPHyPXrn0CSB9QvagoQJWF25Ec5WHjUXK3g";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', { email, password }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      console.log('Login response:', response.data);
      if (response.status === 200 && response.data.access && response.data.refresh) {
        setEmail('');
        setPassword('');
        navigate('/Home');
      } else {
        console.error('Login failed:', response.data);
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };
  return (
    <section className="mb-64">
      <div className="flex flex-col items-center mx-auto md:h-screen lg:py-0 ">
        <div className="w-full backdrop-filter backdrop-blur-lg rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-500 md:text-2xl ">
              Sign In
            </h1>
            <form className="space-y-4 md:space-y-6" action="http://127.0.0.1:8000/api/login/">
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
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center mt-4">
              <button type="submit" className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden   focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" onSubmit={handleSubmit}>
               SIGN IN
              </button></div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Reset password? <a href="/component/passwordreset" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Reset password</a></p>
            </form>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn; 