import React, { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        console.log("Fetching booking data...");
        const response = await client.get(`/api/bookings/`);
        console.log("Response data:", response.data);
        if (response.data.length > 0) {
          setBookings(response.data); // Set all bookings
        }
      } catch (error) {
        console.error('Error fetching booking:', error);
      }
    };

    fetchBookings();
  }, []);

  if (bookings.length === 0) return <div>Loading...</div>;

  return (
    <div className='text-white text-center p-4 backdrop-filter backdrop-blur-lg'>
      <h1 className='text-2xl font-bold mb-4'>Booking Details</h1>
      <table className='table-auto w-full text-left bg-opacity-50'>
        <thead>
          <tr className=''>
            <th className='border p-2'>ID</th>
            <th className='border p-2'>Date</th>
            <th className='p-2 border'>Time</th>
            <th className='p-2 border'>Route</th>
            <th className='p-2 border'>Bus</th>
            <th className='p-2 border'>Passenger</th>
            <th className='p-2 border'>Fare</th>
            <th className='p-2 border'>Payment</th>
            <th className='p-2 border'>Confirmation</th>
            <th className='p-2 border'>Email</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.booking_id} className='border-b border-gray-200'>
              <td className='p-2 border'>{booking.booking_id}</td>
              <td className='p-2 border'>{booking.booking_date}</td>
              <td className='p-2 border'>{booking.booking_time}</td>
              <td className='p-2 border'>{booking.booking_route}</td>
              <td className='p-2 border'>{booking.booking_bus}</td>
              <td className='p-2 border'>{booking.booking_passenger}</td>
              <td className='p-2 border'>{booking.booking_fare}</td>
              <td className='p-2 border'>{booking.booking_payment}</td>
              <td className='p-2 border'>{booking.booking_confirmation}</td>
              <td className='p-2 border'>{booking.booking_email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingDetails;
