import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BusDetails = () => {
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

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 bg-gray-700'>
      {bus.map((bus) => (
        <div className='border p-4 bg-white' key={bus.id}>
          <p>{bus.id}</p>
          <Link to={`/bus/${bus.id}`} state={bus}>
            <img src="src/assets/bus4.jpeg" alt={bus.bus_reg} />
          </Link>
          <h4>{bus.bus_reg}</h4>
          <p>Bus Manufacture: {bus.bus_manufacture}</p>
          <p>Bus Value: {bus.bus_price}</p>
          <p>Bus Capacity: {bus.bus_capacity}</p>
          <p>Owner Identification: {bus.bus_owner_identification}</p>
          <p>Owner Contact: {bus.bus_owner_contact}</p>
          <p>Bus Driver: {bus.bus_driver}</p>
          <p>Driver Contact: {bus.bus_driver_contact}</p>
          <p>Bus Conductor: {bus.bus_conductor}</p>
          <p>Conductor Contact: {bus.bus_conductor_contact}</p>
          <p>Conductor Identification: {bus.bus_conductor_identification}</p>
        </div>
      ))}
    </div>
  );
};

export default BusDetails;



