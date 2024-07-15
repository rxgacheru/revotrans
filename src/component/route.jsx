import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Routes</h1>
      {routes.map((route) => (
        <div key={route.route_id}>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Route ID: {route.route_id}</p>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Route Name: {route.route_name}</p>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Destination: {route.route_destination1}</p>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Second Destination: {route.route_destination2}</p>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Third Destination: {route.route_destination3}</p>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fourth Destination: {route.route_destination4}</p>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fare: {route.route_fare}</p>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bus No.1 : {route.route_bus1}</p>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bus No.2 : {route.route_bus2}</p>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bus No.3 : {route.route_bus3}</p>
          <button onClick={() => deleteRoute(route.route_id)}>Delete Route</button>
          <button className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg border black text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={() => updateRoute(route.route_id, { 
            route_name: route.route_name, 
            route_destination1: route.route_destination1, 
            route_destination2: route.route_destination2, 
            route_destination3: route.route_destination3, 
            route_destination4: route.route_destination4, 
            route_fare: route.route_fare, 
            route_bus1: route.route_bus1, 
            route_bus2: route.route_bus2, 
            route_bus3: route.route_bus3 
          })}>Update Route</button>
        </div>
      ))}
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create New Route</h1>
      <form className="space-y-4 md:space-y-6" onSubmit={(e) => { e.preventDefault(); createNewRoute(newRouteData); }}>
        {Object.keys(newRouteData).map((key) => (
          <div key={key}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{key}</label>
            <input
              type="text"
              name={key}
              value={newRouteData[key]}
              onChange={(e) => setNewRouteData({ ...newRouteData, [key]: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        ))}
        <button type="submit" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg border black text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create Route</button>
      </form>
      </div>
    </div>
    </div>
    </section>
  );
};

export default Route;