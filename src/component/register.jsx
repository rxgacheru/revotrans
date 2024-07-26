/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const Register = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    client.get("/api/user")
      .then(function (res) {
        setCurrentUser(res.data);
      })
      .catch(function (error) {
        setCurrentUser(false);
      });
  }, []);

  const setEmailValue = (value) => {
    setEmail(value);
  };

  const setPasswordValue = (value) => {
    setPassword(value);
  };

  const setUsernameValue = (value) => {
    setUsername(value);
  };

  const update_form_btn = () => {
    setRegistrationToggle(!registrationToggle); 
  };

  const submitRegistration = (e) => {
    e.preventDefault();
    client.post(
      "/api/register/",
      {
        email: email,
        username: username,
        password: password,
      }
    ).then(function (res) {
      client.post(
        "/api/login",
        {
          email: email,
          password: password,
        }
      ).then(function (res) {
        setCurrentUser(true);
      });
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    client.post(
      "/api/login",
      {
        email: email,
        password: password
      }
    ).then(function (res) {
      setCurrentUser(true);
    }).catch(function (error) {
      setCurrentUser(false);
      console.error('Error logging in:', error);
    });
  };  

  const submitLogout = (e) => {
    e.preventDefault();
    client.post(
      "/api/logout",
      null,
      { withCredentials: true }
    ).then(function (res) {
      setCurrentUser(false);
    }).catch(function (error) {
      console.error('Error logging out:', error);
    });
  };
  
  if (currentUser) {
    return (
      <nav className='bg-black'>
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to='/' className="text-gray-300">Home</Link>
            </li>
            <li>
              <Link to='/home' className="text-gray-300">RevoTrans</Link>
            </li>
            <li>
              <Link to='/component/home' className="text-gray-300">Dashboard</Link>
            </li>
            <li>
              <Link to='/component/logout' className="text-gray-300" onClick={submitLogout}>Sign Out</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 p-4 w-1/2 ">
          <div className="flex flex-col items-center mx-auto md:h-screen lg:py-0 ">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold  ">
              RevoTrans
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-500 md:text-2xl text-center">
                  Create an account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={submitRegistration} action='http://127.0.0.1:8000'>
                <div>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-500" value={username} onChange={(e) => setUsernameValue(e.target.value)}>Username</label>
                    <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John123" required="" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500" value={email} onChange={(e) => setEmailValue(e.target.value)}>Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-500" value={password} onChange={(e) => setPasswordValue(e.target.value)}>Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                    </div>
                  </div>
                  <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-8 px- overflow-hidden   text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm text-center ml-20 text-2xl my-7 font-bold" onClick={update_form_btn}>
                    <span class="relative px-12 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    {registrationToggle ? 'Register' : 'Log in'}
                    </span>
                    </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <a href="/component/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
  }
};

export default Register; */


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const Register = () => {
  const [customUser, setCustomUser] = useState(null);
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const history = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await client.get("/api/users/");
        setCustomUser(response.data);
      } catch (error) {
        if (error.response.status === 401) {
          history.push('/login');
        } else {
          console.error('Error fetching users:', error);
        }
      }
    };
    fetchUsers();
  }, [history]);

  const setPasswordValue = (value) => {
    setPassword(value);
  };

  const setUsernameValue = (value) => {
    setUsername(value);
  };

  const update_form_btn = () => {
    setRegistrationToggle(!registrationToggle); 
  };

  const submitRegistration = (e) => {
    e.preventDefault();
    client.post(
      "/api/users/",
      {
        email: email,
        username: username,
        password: password,
      }
    ).then(function (res) {

      history.push('/component/Home');
    });
  };
  

  const submitLogin = (e) => {
    e.preventDefault();
    client.post(
      "/api/users",
      {
        email: email,
        password: password
      }
    ).then(function (res) {
      history.push('/component/Home');

    }).catch(function (error) {

      console.error('Error logging in:', error);
    });
  };
  
  const submitLogout = (e) => {
    e.preventDefault();
    client.post(
      "/api/logout",
      null,
      { withCredentials: true }
    ).then(function (res) {
      setCusomUser(false);
      history.push('/component/login'); 
    }).catch(function (error) {
      console.error('Error logging out:', error);
    });
  };

  return (
    <div action="http://127.0.0.1:8000/api/users">
  {customUser ? (
    <div className="flex flex-col items-center mx-auto md:h-screen lg:py-0">
      <h1 className="text-2xl font-bold mb-4">Welcome, {username}!</h1>
      <button 
        onClick={submitLogout} 
        className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
        Logout
      </button>
    </div>
  ) : (
    <div className=" p-6 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg shadow-md backdrop-filter backdrop-blur-lg ">
        <div className="p-8 space-y-6">
          <h1 className="text-2xl font-bold leading-tight text-center text-gray-500 dark:text-white">Welcome!</h1>
          {registrationToggle ? (
            <form className="text-white space-y-6" onSubmit={submitRegistration} action="http://127.0.0.1:8000/api/users">
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
                className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden   focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                Register
              </button></div>
            </form>
          ) : (
            <form onSubmit={submitLogin} action="http://127.0.0.1:8000/api/users">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Email:</label>
                <input 
                  className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Password:</label>
                <input 
                  className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center mt-4">
              <button 
                className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden   focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" >
                Login
              </button>
              <button 
                className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden   focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                type="submit"
                onClick={update_form_btn} 
                type="button">
                Want to Register?
              </button></div>
            </form>
          )}
        </div>
      </div>
    </div>
  )}
</div>

  );
};

export default Register;