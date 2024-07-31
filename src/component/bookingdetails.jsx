import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Booking from './BookingForm';

const BookingDetails = ({ fetchBookings, bookings }) => {
  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Time</th>
            <th>Route</th>
            <th>Bus</th>
            <th>Passenger</th>
            <th>Fare</th>
            <th>Payment</th>
            <th>Confirmation</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <Booking key={booking.booking_id} booking={booking} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingDetails;
