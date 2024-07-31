import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Explore = () => {
  const [bus, setBus] = useState([]);

  const fetchBus = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/buses/');
      setBus(response.data);
    } catch (error) {
      console.error('Error fetching buses:', error);
    }
  };


  useEffect(() => {
    fetchBus();
  }, []);

  if (bus.length === 0) {
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
    <div className="ml-4 mr-4 grid grid-cols-3 gap-4 ">
  {bus.map((bus) => (
    <div key={bus.bus_id} className="backdrop-filter backdrop-blur-3xl rounded-lg p-4 shadow-md text-white">
      <h2 className="text-xl font-bold mb-2">Bus ID: {bus.bus_id}</h2>
      <ul>
      <li>
      <Link to={`/bus/${bus.id}`} state={bus}>
      </Link>
      </li>
        <li>
          <span className="">Registration:</span> {bus.bus_reg}
        </li>
        <li>
          <span className="">Capacity:</span> {bus.bus_capacity}
        </li>
        <li>
          <span className="">Owner Contact:</span> {bus.bus_owner_contact}
        </li>
        <li>
          <span className="">Driver Contact:</span> {bus.bus_driver_contact}
        </li>
        <li>
          <span className="">Conductor contact:</span> {bus.bus_conductor_contact}
        </li>
      </ul>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center">
      <a href="/component/BookingForm">
      <button className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-3 me-2 mb-2 dark:focus:ring-yellow-900'>Rent Bus: {bus.bus_id}</button>
     </a>
     <Link to={`/bus/${bus.id}`} state={bus}>
      <button className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-3 me-2 mb-2 dark:focus:ring-yellow-900'>More Info</button></Link>
     </div>
    </div>
  ))}
</div>
  );
};

export default Explore;
