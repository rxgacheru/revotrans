import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const BookingForm = ({ fetchBookings }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    booking_date: '',
    booking_time: '',
    booking_route: '',
    booking_bus: '',
    booking_passenger: '',
    booking_fare: '',
    booking_payment: 'pending',
    booking_confirmation: 'pending',
    booking_email: ''
  });

  const [routes, setRoutes] = useState([]);
  const [buses, setBuses] = useState([]);


  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/routes/');
        setRoutes(response.data);
      } catch (error) {
        console.error('Error fetching routes:', error);
      }
    };
   

  const fetchBuses = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/buses/');
      setBuses(response.data);
    } catch (error) {
      console.error('Error fetching buses:', error);
    }
  };

  fetchRoutes();
  fetchBuses();
}, []);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/bookings/create/', formData);
      alert('Booking created successfully!');
      fetchBookings();
      setFormData({
        // reset form data fields
      });
      navigate(`/bookings/${response.data.booking_id}`);
    } catch (error) {
      console.error('Error creating booking:', error);
      if (error.response) {
        console.error('Server response:', error.response.data);
        console.error('Server status:', error.response.status);
        console.error('Server headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
    }
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
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
        <label htmlFor="booking_route" className="block mb-2 text-sm font-medium text-white">Route:</label>
          <select id="booking_route" name="booking_route" value={formData.booking_route} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">Select Route</option>
            {routes.map((route) => (
              <option key={route.route_id} value={route.route_id}>{route.route_name}</option>
            ))}
          </select>
      </div>
      <div className='w-1/2'>
      <label htmlFor="booking_bus" className="block mb-2 text-sm font-medium text-white">Bus:</label>
        <select id="booking_bus" name="booking_bus" value={formData.booking_bus} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">Select Bus</option>
            {buses.map((bus) => (
            <option key={bus.bus_id} value={bus.bus_id}>{bus.bus_reg}</option>
        ))}
        </select>
      </div>
      </div>
      <div className='flex'>
      <div className='w-1/2 mr-5'>
      <label htmlFor="booking_passenger" className="block mb-2 text-sm font-medium text-white " >Passenger:</label>
        <input type="text" id="booking_passenger" name="booking_passenger" value={formData.booking_passenger} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      <div className='w-1/2'>
      <label htmlFor="booking_fare" className="block mb-2 text-sm font-medium text-white">Fare:</label>
        <input type="number" id="booking_fare" name="booking_fare" value={formData.booking_fare} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      </div>
      <div className='flex'>
      <div className='w-1/2 mr-5'>
      <label htmlFor="booking_payment" className="block mb-2 text-sm font-medium text-white">Payment:</label>
      <select id="booking_payment" name="booking_payment" value={formData.booking_payment} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="pending">Pending</option>
        <option value="paid">Paid</option>
        </select>
      </div>
      <div className='w-1/2'>
      <label htmlFor="booking_email" className="block mb-2 text-sm font-medium text-white">Confirmation</label>
      <select id="booking_confirmation" name="booking_confirmation" value={formData.booking_confirmation} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="pending">Pending</option>
        <option value="confirmed">Confirmed</option>
        <option value="cancelled">Cancelled</option>
      </select>
      </div>
      </div>
      <div className='flex'>
      <div className='w-1/2 mr-5'>
      <label htmlFor="booking_email" className="block mb-2 text-sm font-medium text-white">Email:</label>
    <input
      type="email"
      id="booking_email"
      name="booking_email"
      value={formData.booking_email}
      onChange={handleChange}
      className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required
    />
      </div>
      <div className='w-1/2'>
      
      </div>
      </div>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center">
      <button type="submit" className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-3 me-2 mb-2 dark:focus:ring-yellow-900' >
        Submit Booking
        </button></div>
    </form>
    </div>
    </div>
    </div>
    
    </div>
    
    </div>
  );
};

export default BookingForm;