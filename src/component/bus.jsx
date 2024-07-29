import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});


const BusForm = () => {
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
    <div className=" pt-4 ">
    <div className="ml-8 text-white ">
    <div className="flex flex-col items-center mx-auto md:h-screen mb-48 ">
    <div className="w-full backdrop-filter backdrop-blur-lg rounded-lg shadow  md:mt-0 sm:max-w-xl xl:p-0  ">
    <div className="justify-center align-center items-center p-6 space-y-4 md:space-y-6 text-center">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center">Create New Bus</h1>
      <form className="space-y-4 md:space-y-6" onSubmit={(e) => { e.preventDefault(); createNewBus(newBusData); }} >
      <div className='flex'>
        <div className='w-1/2 mr-5'>
            {Object.keys(newBusData).map((key) => (
              <div key={key} className="mb-4">
                <label className="block mb-2 text-sm font-medium text-white">{key}</label>
                <input
                  type="text"
                  name={key}
                  value={newBusData[key]}
                  onChange={(e) => setNewBusData({ ...newBusData, [key]: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            ))}
          </div>
        </div>
        <button onSubmit={updateBus} type="submit" className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-3 me-2 mb-2 dark:focus:ring-yellow-900'>
            Create Bus
        </button>
      </form>
    </div>
    </div>
  </div>
  </div>
  </div> 
  );
 }
export default BusForm;
  