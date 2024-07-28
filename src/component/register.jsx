import { useState } from 'react';
import axios from 'axios';

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyMTI1MTYxLCJpYXQiOjE3MjIxMjQ4NjEsImp0aSI6Ijk2ZTM0OTI5NWU1NjRlZWM5ODM2MmExMWFlNDA4MWIyIiwidXNlcl9pZCI6NH0.VqI1nhf12wYy-AsWeFZLyTYQzgtEzuByNiWXqKTkTRk";
const client = axios.create({
  baseURL: "http://127.0.0.1:8000/api/register/",
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
})
const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       const response = await client.post('http://127.0.0.1:8000/api/users/', { email, username, password });
       
       setEmail('');
       setUsername('');
       setPassword('');
    } catch (error) {
       console.error("There was an error submitting the form!", error);
    }
 };

  return (
    <div className=" p-6 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg shadow-md backdrop-filter backdrop-blur-lg ">
        <div className="p-8 space-y-6">
          <h1 className="text-2xl font-bold leading-tight text-center text-gray-500 dark:text-white">Welcome!</h1>
         
            <form className="text-white space-y-6" method='POST' action="http://127.0.0.1:8000/api/users/">
              <div>
                <label className="block mb-2 text-sm font-medium ">Email:</label>
                <input 
                  className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium ">Username:</label>
                <input 
                  className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium ">Password:</label>
                <input 
                  className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <div className='flex flex-col items-center'>
              <button 
                className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden   focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" onSubmit={handleSubmit}>
                Register
              </button></div>
              <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">Back to <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/component/login">SIGN IN</a></label>
                </div>
            </form>
            </div>
            </div>
            </div>
  );
};

export default Register;