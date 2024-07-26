import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/contacts/create/', {
        name,
        email,
        message,
      });
      setSubmitSuccess(true);
      setSubmitError(null);
    } catch (error) {
      setSubmitError(error.message);
      setSubmitSuccess(false);
    }
  };

  return (
    <div>
      <section className="mb-64 ">
      <div className="flex flex-col items-center mx-auto md:h-screen lg:py-0 ">
      <div className="w-full backdrop-filter backdrop-blur-lg rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center">
                  Contact Us
                </h1>
      <form  onSubmit={handleSubmit}>
      <div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white"for="exampleInputPassword1"  name="Name">First Name :</label>
            <input value={name} onChange={(event) => setName(event.target.value)} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"type="text"placeholder="John" aria-label="name" required name="Name"/>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white"for="exampleInputPassword1"  name="Name" >Last Name :</label>
            <input value={name} onChange={(event) => setName(event.target.value)} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text"placeholder="Doe" aria-label="name" required name="Name" />
          </div>
          <div >
          <label  className="block mb-2 text-sm font-medium text-white" for="exampleInputEmail1" placeholder="Your email...">Email :</label>
          <input value={email} onChange={(event) => setEmail(event.target.value)} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  type="email" id="exampleInputEmail1" aria-describedby="emailHelp" required name="Message" placeholder="johndoe@gmail.com"/>
        </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white" for="exampleInputPassword1"  name="country" >Country :</label>
            <input value={name} onChange={(event) => setName(event.target.value)} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Kenya" aria-label="First name" required name="fName"/>
          </div>
          </div>
          <div>
          <label className="block mb-2 text-sm font-medium text-white" for="exampleFormControlTextarea1" name="Message">Subject :</label>
          <textarea value={message} onChange={(event) => setMessage(event.target.value)}  className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"id="exampleFormControlTextarea1" placeholder="Message..." rows="9" cols="9" required name="Text" ></textarea>
        </div>
  
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center mt-4">
          <button onClick={handleSubmit} type="submit" className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden   focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Submit</button>
        </div>
      </form>
      
      {submitSuccess && <p>Contact form submitted successfully!</p>}
      {submitError && <p>Error: {submitError}</p>}
      </div>
      </div>
      </div>
      </section>
    </div>
  );
};

export default ContactForm;
