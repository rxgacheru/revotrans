import React, { useState, useEffect } from 'react';
import axios from 'axios';


const BusesDetails = () => {
  const [buses, setBuses] = useState([]);

  const fetchBuses = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/buses/');
      setBuses(response.data);
    } catch (error) {
      console.error('Error fetching buses:', error);
    }
  };

  const updateBus = async (busId, updatedBusData) => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/buses/${busId}/`, updatedBusData);
      console.log('Bus updated:', response.data);
      fetchBuses(); 
    } catch (error) {
      console.error('Error updating bus:', error);
    }
  };

  const deleteBus = async (busId) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/buses/${busId}/`);
      console.log('Bus deleted:', response.data);
      fetchBuses(); 
    } catch (error) {
      console.error('Error deleting bus:', error);
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
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
    <table className="table-auto dark:bg-gray-800 rounded-lg p-4 mb-4">
      <thead>
        <tr>
          <th className="border p-3 text-gray-500 rounded-lg font-bold mb-4">Bus ID</th>
          <th className="text-sm font-medium text-gray-500 dark:text-white">Bus Registration</th>
          <th className="text-sm font-medium text-gray-500 dark:text-white">Bus Manufacture</th>
          <th className="text-sm font-medium text-gray-500 dark:text-white">Bus Value</th>
          <th className="text-sm font-medium text-gray-500 dark:text-white">Bus Capacity</th>
          <th className="text-sm font-medium text-gray-500 dark:text-white">Owner Identification</th>
          <th className="text-sm font-medium text-gray-500 dark:text-white">Owner Contact</th>
          <th className="text-sm font-medium text-gray-500 dark:text-white">Bus Driver</th>
          <th className="text-sm font-medium text-gray-500 dark:text-white">Driver Contact</th>
          <th className="text-sm font-medium text-gray-500 dark:text-white">Bus Conductor</th>
          <th className="text-sm font-medium text-gray-500 dark:text-white">Conductor contact</th>
          <th className="text-sm font-medium text-gray-500 dark:text-white">Conductor Identification</th>
          <th className="text-sm font-medium text-gray-500 dark:text-white">Actions</th>
        </tr>
      </thead>
      <tbody>
        {buses.map((bus) => (
          <tr key={bus.bus_id}>
            <td className="border p-3 text-gray-500 rounded-lg font-bold mb-4">{bus.bus_id}</td>
            <td className="text-sm font-medium text-gray-500 dark:text-white">{bus.bus_reg}</td>
            <td className="text-sm font-medium text-gray-500 dark:text-white">{bus.bus_manufacture}</td>
            <td className="text-sm font-medium text-gray-500 dark:text-white">{bus.bus_price}</td>
            <td className="text-sm font-medium text-gray-500 dark:text-white">{bus.bus_capacity}</td>
            <td className="text-sm font-medium text-gray-500 dark:text-white">{bus.bus_owner_identification}</td>
            <td className="text-sm font-medium text-gray-500 dark:text-white">{bus.bus_owner_contact}</td>
            <td className="text-sm font-medium text-gray-500 dark:text-white">{bus.bus_driver}</td>
            <td className="text-sm font-medium text-gray-500 dark:text-white">{bus.bus_driver_contact}</td>
            <td className="text-sm font-medium text-gray-500 dark:text-white">{bus.bus_conductor}</td>
            <td className="text-sm font-medium text-gray-500 dark:text-white">{bus.bus_conductor_contact}</td>
            <td className="text-sm font-medium text-gray-500 dark:text-white">{bus.bus_conductor_identification}</td>
            <td className="flex justify-center mt-4">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-8 px- overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm text-center ml-20 text-2xl my-7 font-bold" onClick={() => deleteBus(bus.bus_id)}>
                <span className="relative px-12 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Delete
                </span>
              </button>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-8 px- overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm text-center ml-20 text-2xl my-7 font-bold" onClick={() => updateBus(bus.bus_id, { 
                Manufacture: bus.bus_manufacture, 
                Value: bus.bus_price, 
                Registration: bus.bus_reg, 
                Capacity: bus.bus_capacity, 
                Owner: bus.bus_owner, 
                Contact_Owner: bus.bus_owner_contact, 
                Identification_Owner: bus.bus_owner_identification, 
                Driver: bus.bus_driver, 
                Contact_Driver: bus.bus_driver_contact, 
                Identification_Driver: bus.bus_driver_identification, 
                Conductor: bus.bus_conductor, 
                Contact_Conductor: bus.bus_conductor_contact, 
                Identification_Conductor: bus.bus_conductor_identification, 
                Route: bus.bus_route, 
                Purchased_Date: bus.date_purchased, 
                Registered_Date: bus.registered_date, 
                Insurance: bus.bus_insurance 
              })}>
                <span className="relative px-12 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Update
                </span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default BusesDetails;
