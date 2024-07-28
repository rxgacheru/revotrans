import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const Route = () => {
  const [routes, setRoutes] = useState([]);
  const [newRouteData, setNewRouteData] = useState({
    RouteID: '',
    Route: '',
    Destination_1: '',
    Destination_2: '',
    Destination_3: '',
    Destination_4: '',
    Fare: '',
    Bus_1: '',
    Bus_2: '',
    Bus_3: '',
  });

  const fetchRoutes = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/routes/');
      setRoutes(response.data);
    } catch (error) {
      console.error('Error fetching routes:', error);
    }
  };

  const createNewRoute = async (newRouteData) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/routes/', newRouteData);
      console.log('New route created:', response.data);
      fetchRoutes(); 
    } catch (error) {
      console.error('Error creating new route:', error);
    }
  };

  const updateRoute = async (routeId, updatedRouteData) => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/routes/${routeId}/`, updatedRouteData);
      console.log('Route updated:', response.data);
      fetchRoutes(); 
    } catch (error) {
      console.error('Error updating route:', error);
    }
  };

  const deleteRoute = async (routeId) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/routes/${routeId}/`);
      console.log('Route deleted:', response.data);
      fetchRoutes(); 
    } catch (error) {
      console.error('Error deleting route:', error);
    }
  };

  useEffect(() => {
    fetchRoutes();
  }, []);

  return (
    <section className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
      <h1 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white mb-4">Routes</h1>
      
      {routes.map((route) => (
        <div key={route.route_id}>
          <p className="block mb-2 text-sm font-medium text-white">Route ID: {route.route_id}</p>
          <div className="grid grid-cols-1 gap-2">
          <p className="block mb-2 text-sm font-medium text-white">Route Name: {route.route_name}</p>
          <p className="block mb-2 text-sm font-medium text-white">First Destination: {route.route_destination1}</p>
          <p className="block mb-2 text-sm font-medium text-white">Second Destination: {route.route_destination2}</p>
          <p className="block mb-2 text-sm font-medium text-white">Third Destination: {route.route_destination3}</p>
          <p className="block mb-2 text-sm font-medium text-white">Fourth Destination: {route.route_destination4}</p>
          <p className="block mb-2 text-sm font-medium text-white">Fare: {route.route_fare}</p>
          <p className="block mb-2 text-sm font-medium text-white">Bus No.1 : {route.route_bus1}</p>
          <p className="block mb-2 text-sm font-medium text-white">Bus No.2 : {route.route_bus2}</p>
          <p className="block mb-2 text-sm font-medium text-white">Bus No.3 : {route.route_bus3}</p></div>
          <button onClick={() => deleteRoute(route.route_id)}>Delete Route</button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-8 px- overflow-hidden   text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm text-center ml-20 text-2xl my-7 font-bold" onClick={() => updateRoute(route.route_id, { 
            Route: route.route_name, 
            Destination1: route.route_destination1, 
            Destination2: route.route_destination2, 
            Destination3: route.route_destination3, 
            Destination4: route.route_destination4, 
            Fare: route.route_fare, 
            Bus1: route.route_bus1, 
            route_bus2: route.route_bus2, 
            route_bus3: route.route_bus3 
          })}><span class="relative px-12 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Update Route</span></button>
        </div>
      ))}
      <div className="flex flex-col items-center mx-auto md:h-screen lg:py-0">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create New Route</h1>
      <form onSubmit={(e) => { e.preventDefault(); createNewRoute(newRouteData); }}>
      <div className="flex">
        {Object.keys(newRouteData).map((key) => (
          <div key={key} className="mb-4" >
            <label className="block mb-2 text-sm font-medium text-white">{key}</label>
            <input
              type="text"
              name={key}
              value={newRouteData[key]}
              onChange={(e) => setNewRouteData({ ...newRouteData, [key]: e.target.value })}  className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        ))}
        </div>

        <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-8 px- overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm text-center ml-20 text-2xl my-7 font-bold">
        <span className="relative px-12 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Create Route</span></button>
      </form>
      </div>
    </div>
    </section>
  );
};

export default Route;