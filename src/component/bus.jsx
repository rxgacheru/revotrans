import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Bus = () => {
  const [buses, setBuses] = useState([]);
  const [newBusData, setNewBusData] = useState({
    Registration: '',
    Manufacture: '',
    Value: 0,
    Capacity: '',
    Owner: '',
    Contact_Owner: '',
    Identification_Owner: '',
    Driver: '',
    Contact_Driver: '',
    Identification_Driver: '',
    Conductor: '',
    Contact_Conductor: '',
    Identification_Conductor: '',
    Route: [],
    Purchased_Date: '',
    Registered_Date: '',
    Insurance: '',
  });

  const fetchBuses = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/buses/');
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

  return (
    <section className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        
        {buses.map((bus) => (
          <div key={bus.bus_id} className="dark:bg-gray-800 rounded-lg p-4 mb-4">
            <p className="border p-3 text-gray-500 rounded-lg font-bold mb-4">Bus ID: {bus.bus_id}</p>
            <div className="grid grid-cols-1 gap-2">
              <p className="text-sm font-medium text-gray-500 dark:text-white">Bus Registration: {bus.bus_reg}</p>
              <p className="text-sm font-medium text-gray-500 dark:text-white">Bus Manufacture: {bus.bus_manufacture}</p>
              <p className="text-sm font-medium text-gray-500 dark:text-white">Bus Value: {bus.bus_price}</p>
              <p className="text-sm font-medium text-gray-500 dark:text-white">Bus Capacity: {bus.bus_capacity}</p>
              <p className="text-sm font-medium text-gray-500 dark:text-white">Owner Identification: {bus.bus_owner_identification}</p>
              <p className="text-sm font-medium text-gray-500 dark:text-white">Owner Contact: {bus.bus_owner_contact}</p>
              <p className="text-sm font-medium text-gray-500 dark:text-white">Bus Driver: {bus.bus_driver}</p>
              <p className="text-sm font-medium text-gray-500 dark:text-white">Driver Contact: {bus.bus_driver_contact}</p>
              <p className="text-sm font-medium text-gray-500 dark:text-white">Bus Conductor: {bus.bus_conductor}</p>
              <p className="text-sm font-medium text-gray-500 dark:text-white">Conductor contact: {bus.bus_conductor_contact}</p>
              <p className="text-sm font-medium text-gray-500 dark:text-white">Conductor Identification: {bus.bus_conductor_identification}</p>
            </div>
            <div className="flex justify-center mt-4">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-8 px- overflow-hidden   text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm text-center ml-20 text-2xl my-7 font-bold" onClick={() => deleteBus(bus.bus_id)}>
              <span class="relative px-12 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Delete Bus
              </span>
                </button>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-8 px- overflow-hidden   text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm text-center ml-20 text-2xl my-7 font-bold" onClick={() => updateBus(bus.bus_id, { 
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
                <span class="relative px-12 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Update Bus
                </span>
                </button>
            </div>
          </div>
        ))}
        <div className="mt-6">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white mb-4">Create New Bus</h1>
          <form onSubmit={(e) => { e.preventDefault(); createNewBus(newBusData); }} className="space-y-4 md:space-y-6">
            <div className="flex">
              <div>
                {Object.keys(newBusData).map((key) => (
                  <div key={key} className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-500">{key}</label>
                    <input
                      type="text"
                      name={key}
                      value={newBusData[key]}
                      onChange={(e) => setNewBusData({ ...newBusData, [key]: e.target.value })}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-8 px- overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm text-center ml-20 text-2xl my-7 font-bold">
              <span className="relative px-12 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Create Bus
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
                }
export default Bus;
  