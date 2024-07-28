import React, { useState } from 'react';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const BookingForm = () => {
  const [formData, setFormData] = useState({
    booking_date: '',
    booking_time: '',
    booking_route: '',
    booking_bus: '',
    booking_seat: '',
    booking_passenger: '',
    booking_status: '',
    booking_fare: '',
    booking_payment: '',
    booking_cancellation: '',
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await client.post('/api/bookings/', formData);
      console.log('New booking created:', response.data);
      setSubmitSuccess(true); 
      setFormData({
        booking_date: '',
        booking_time: '',
        booking_route: '',
        booking_bus: '',
        booking_seat: '',
        booking_passenger: '',
        booking_status: '',
        booking_fare: '',
        booking_payment: '',
        booking_cancellation: '',
      });
    } catch (error) {
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
    }
  };
  

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className=" pt-4 ">
      <div className="ml-8 text-white ">
          <div className="flex flex-col items-center mx-auto md:h-screen mb-48  ">
            <div className="w-full backdrop-filter backdrop-blur-lg rounded-lg shadow  md:mt-0 sm:max-w-xl xl:p-0  ">
              <div className="p-6 space-y-4 md:space-y-6">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center">
                  Booking A Bus
                </h1>
    <form onSubmit={handleSubmit} action='http://127.0.0.1:8000/api/bookings/' className="space-y-4 md:space-y-6">
      <div className='flex'>
      <div className='w-1/2 mr-5'>
        <label htmlFor="booking_date" className="block mb-2 text-sm font-medium text-white">Date:</label>
        <input type="date" id="booking_date" name="booking_date" value={formData.booking_date} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div className='w-1/2'>
        <label htmlFor="booking_time" className="block mb-2 text-sm font-medium text-white">Time:</label>
        <input type="time" id="booking_time" name="booking_time" value={formData.booking_time} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-300 dark:focus:border-blue-500" />
      </div>
      </div>
      <div className='flex'>
      <div className='w-1/2 mr-5'>
        <label htmlFor="booking_route" className="block mb-2 text-sm font-medium text-white ">Route:</label>
        <input type="text" id="booking_route" name="booking_route" value={formData.booking_route} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      <div className='w-1/2'>
        <label htmlFor="booking_bus" className="block mb-2 text-sm font-medium text-white ">Bus:</label>
        <input type="text" id="booking_bus" name="booking_bus" value={formData.booking_bus} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      </div>
      <div className='flex'>
      <div className='w-1/2 mr-5'>
        <label htmlFor="booking_seat" className="block mb-2 text-sm font-medium text-white ">Seat:</label>
        <input type="text" id="booking_seat" name="booking_seat" value={formData.booking_seat} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      <div className='w-1/2'>
        <label htmlFor="booking_passenger" className="block mb-2 text-sm font-medium text-white " >Passenger:</label>
        <input type="text" id="booking_passenger" name="booking_passenger" value={formData.booking_passenger} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      </div>
      <div className='flex'>
      <div className='w-1/2 mr-5'>
        <label htmlFor="booking_status" className="block mb-2 text-sm font-medium text-white">Status:</label>
        <input type="text" id="booking_status" name="booking_status" value={formData.booking_status} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      <div className='w-1/2'>
        <label htmlFor="booking_fare" className="block mb-2 text-sm font-medium text-white">Fare:</label>
        <input type="number" id="booking_fare" name="booking_fare" value={formData.booking_fare} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      </div>
      <div className='flex'>
      <div className='w-1/2 mr-5'>
        <label htmlFor="booking_payment" className="block mb-2 text-sm font-medium text-white">Payment:</label>
        <input type="text" id="booking_payment" name="booking_payment" value={formData.booking_payment} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div className='w-1/2'>
        <label htmlFor="booking_cancellation" className="block mb-2 text-sm font-medium text-white">Cancellation:</label>
        <input type="date" id="booking_cancellation" name="booking_cancellation" value={formData.booking_cancellation} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      </div>
      {submitSuccess && <p>Booking created successfully!</p>}
      <div className='flex flex-col items-center'>
      <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-8 px- overflow-hidden text-white rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm text-center  text-2xl my-7 font-bold" onSubmit={handleSubmit}>
      <span class="relative px-12 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Submit Booking
      </span>
        </button></div>
    </form>
    </div>
    </div>
    </div>
    
    </div>
    {/*<div className='w-1/2 h-9 ml-12 mt-4 mb-5 mt-24'>
    <img src='src\assets\revotrans-bus2.jpg' className='mx-auto object-contain md:object-scale-down flex h-auto max-w-lg mt-20 md:grid-cols-2 rounded-lg' /></div>*/}
    </div>
  );
};

export default BookingForm;