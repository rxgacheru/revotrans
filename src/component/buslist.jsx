import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BusDetails = () => {
  const [buses, setBuses] = useState([]);

  const fetchBuses = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/buses/');
      setBuses(response.data);
    } catch (error) {
      console.error('Error fetching buses:', error);
    }
  };

  useEffect(() => {
    fetchBuses();
  }, []);

  if (buses.length === 0) {
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
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 bg-white rounded-full gap-x-4 text-gray-800 text-base lg:text-lg'>
      <h1>Buses</h1>
      {buses.map((bus) => (
        <div key={bus.bus_id} className='border p-3 bg-neutral-400 ml-9 mr-9 mt-8 mb-8
        rounded-lg font-bold mt-5'>
          <p>Bus ID: {bus.bus_id}</p>
          <p>Bus Registration: {bus.bus_reg}</p>
          <p>Bus Manufacture: {bus.bus_manufacture}</p>
          <p>Bus Value: {bus.bus_price}</p>
          <p>Bus Capacity: {bus.bus_capacity}</p>
          <p>Owner Identification: {bus.bus_owner_identification}</p>
          <p>Owner Contact: {bus.bus_owner_contact}</p>
          <p>Bus Driver: {bus.bus_driver}</p>
          <p>Driver Contact: {bus.bus_driver_contact}</p>
          <p>Bus Conductor: {bus.bus_conductor}</p>
          <p>Conductor contact: {bus.bus_conductor_contact}</p>
          <p>Conductor Identification: {bus.bus_conductor_identification}</p>
        </div>
      ))}
    </div>
  );
};

export default BusDetails;
