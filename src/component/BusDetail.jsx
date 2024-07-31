// BookingDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookingDetails = () => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    axios.get(`/api/bookings/${bookingId}/`)
      .then(response => {
        setBooking(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the booking details!', error);
      });
  }, [bookingId]);

  if (!booking) return <div>Loading...</div>;

  return (
    <div>
      <h1>Booking Details</h1>
      <p><strong>ID:</strong> {booking.booking_id}</p>
      <p><strong>Date:</strong> {booking.booking_date}</p>
      <p><strong>Time:</strong> {booking.booking_time}</p>
      <p><strong>Route:</strong> {booking.booking_route}</p>
      <p><strong>Bus:</strong> {booking.booking_bus}</p>
      <p><strong>Passenger:</strong> {booking.booking_passenger}</p>
      <p><strong>Fare:</strong> {booking.booking_fare}</p>
      <p><strong>Payment:</strong> {booking.booking_payment}</p>
      <p><strong>Confirmation:</strong> {booking.booking_confirmation}</p>
      <p><strong>Email:</strong> {booking.booking_email}</p>
    </div>
  );
};

export default BookingDetails;
