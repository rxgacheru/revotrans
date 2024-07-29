import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const BookingDetails = ({ bookingId }) => {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await client.get('api/bookings/'); 
        setBooking(response.data);
      } catch (error) {
        console.error('Error fetching booking details:', error);
      }
    };
    fetchBooking();
  }, [bookingId]);
  ; 
   
    
  if (!booking) {
    return (
      <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
        
        <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
         
        </svg>
        <span className="text-4xl font-medium text-gray-500">Loading...</span>
      </div>
    );
  }

  return (
    
    <table className=' backdrop-filter backdrop-blur-lg grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 rounded-full gap-x-4 text-gray-800 text-base lg:text-lg text-white'>
      <thead>
        <tr>
          <th colSpan='2' className='align-center justify-center text-2xl font-bold mb-2 mt-5 text-center '></th>
        </tr>
      </thead>
      <tbody>
        <tr key={booking.booking_id} className=' p-3  mt-8 mb-8 rounded-lg font-bold mt-5 mt-16'>
          <td className='font-bold mb-2 mt-5  text-white'>Booking ID:</td>
          <td>{booking.booking_id}</td>
        </tr>
        <tr>
          <td className='font-bold'>Booking Date:</td>
          <td>{booking.booking_date}</td>
        </tr>
        <tr>
          <td className='font-bold'>Booking Time:</td>
          <td>{booking.booking_time}</td>
        </tr>
        <tr>
          <td className='font-bold'>Booking Route:</td>
          <td>{booking.booking_route}</td>
        </tr>
        <tr>
          <td className='font-bold'>Booking Bus:</td>
          <td>{booking.booking_bus}</td>
        </tr>
        <tr>
          <td className='font-bold'>Booking Seat:</td>
          <td>{booking.booking_seat}</td>
        </tr>
        <tr>
          <td className='font-bold'>Booking Passenger:</td>
          <td>{booking.booking_passenger}</td>
        </tr>
        <tr>
          <td className='font-bold'>Booking Status:</td>
          <td>{booking.booking_status}</td>
        </tr>
        <tr>
          <td className='font-bold'>Booking Fare:</td>
          <td>{booking.booking_fare}</td>
        </tr>
        <tr>
          <td className='font-bold'>Booking Payment:</td>
          <td>{booking.booking_payment}</td>
        </tr>
        <tr>
          <td className='font-bold'>Booking Confirmation:</td>
          <td>{booking.booking_cancellation}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BookingDetails;
