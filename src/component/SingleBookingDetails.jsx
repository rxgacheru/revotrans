import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleBookingDetails = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/bookings/${id}/`);
        setBooking(response.data);
      } catch (error) {
        console.error('Error fetching booking:', error);
      }
    };

    fetchBooking();
  }, [id]);

  if (!booking) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-4 text-white backdrop-filter backdrop-blur-lg max-w-md mx-auto text-center shadow-lg rounded-lg overflow-hidden'>
      <h2 className='text-2xl text-center font-bold mb-5 text-center '>Booking Details</h2>
      <p className='font-bold'>ID: {booking.booking_id}</p>
      <p >Date: {booking.booking_date}</p>
      <p>Time: {booking.booking_time}</p>
      <p>Route: {booking.booking_route}</p>
      <p>Bus: {booking.booking_bus}</p>
      <p>Passenger: {booking.booking_passenger}</p>
      <p>Fare: {booking.booking_fare}</p>
      <p>Payment: {booking.booking_payment}</p>
      <p>Confirmation: {booking.booking_confirmation}</p>
      <p>Email: {booking.booking_email}</p>
    </div>
  );
};

export default SingleBookingDetails;
