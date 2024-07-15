import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingDetails = ({ bookingId }) => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/bookings/`); 
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching booking details:', error);
      }
    };
    fetchFormData();
  }, [bookingId]);

  if (!formData) {
    return <div aria-label="Loading..." role="status" class="flex items-center space-x-2">
    <svg class="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
        <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
    </svg>
    <span class="text-4xl font-medium text-gray-500">Loading...</span>
</div>;
  }

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2  rounded-full gap-x-4 text-gray-800 text-base lg:text-lg text-gray-500'>
      <h2 className='text-2xl font-bold mb-2 mt-5 text-center text-gray-500'>Booking Details</h2>
      <div key={formData.booking_id} className='border p-3 bg-gray-800 ml-9 mr-9 mt-8 mb-8
        rounded-lg font-bold mt-5 mt-16'>
        <p className='text-gray-500'>Booking ID: {formData.booking_id}</p>
        <p className='text-gray-500'>Booking Date: {formData.booking_date}</p>
        <p className='text-gray-500'>Booking Time: {formData.booking_time}</p>
        <p className='text-gray-500'>Booking Route: {formData.booking_route}</p>
        <p className='text-gray-500'>Booking Bus: {formData.booking_bus}</p>
        <p className='text-gray-500'>Booking Seat: {formData.booking_seat}</p>
        <p className='text-gray-500'>Booking Passenger: {formData.booking_passenger}</p>
        <p className='text-gray-500'>Booking Status: {formData.booking_status}</p>
        <p className='text-gray-500'>Booking Fare: {formData.booking_fare}</p>
        <p className='text-gray-500'>Booking Payment: {formData.booking_payment}</p>
        <p className='text-gray-500'>Booking Confirmation: {formData.booking_cancellation}</p>
      </div>
    </div>
  );
};

export default BookingDetails;
