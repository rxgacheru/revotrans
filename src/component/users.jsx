import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyNjM5MzY4LCJpYXQiOjE3MjI1NzkzNjgsImp0aSI6IjQzMmI3NjI2NzY4YjRhZjM5YmRmZmM4NDNjODU1MGVkIiwidXNlcl9pZCI6MjN9.yO_9OQ4vCjX62zR45myaWTO1iMFNfQhTn0nbOxphUnA";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});

const CustomUser = () => {
  const [customUsers, setCustomUsers] = useState([]);
  const [newCustomUserData, setNewCustomUserData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });

  useEffect(() => {
    fetchCustomUsers();
  }, []);

  const fetchCustomUsers = async () => {
    try {
      const response = await client.get('/api/users/');
      setCustomUsers(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Unauthorized: Check if the token is expired or invalid.");
      } else {
        console.error(error);
      }
    }
  };

  const createNewCustomUser = async (newCustomUserData) => {
    try {
      const response = await client.post('/api/users/', newCustomUserData);
      console.log('New custom user created:', response.data);
      fetchCustomUsers();
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Unauthorized: Check if the token is expired or invalid.");
      } else {
        console.error(error);
      }
    }
  };

  const updateCustomUser = async (customUserId, updatedCustomUserData) => {
    try {
      const response = await client.put(`/api/users/${customUserId}/`, updatedCustomUserData);
      console.log('Custom user updated:', response.data);
      fetchCustomUsers();
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Unauthorized: Check if the token is expired or invalid.");
      } else {
        console.error(error);
      }
    }
  };

  const deleteCustomUser = async (customUserId) => {
    try {
      const response = await client.delete(`/api/users/${customUserId}/`);
      console.log('Custom user deleted:', response.data);
      fetchCustomUsers();
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Unauthorized: Check if the token is expired or invalid.");
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="text-white backdrop-filter backdrop-blur-lg ml-2 mr-2 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Custom User List</h1>
      <table className=" w-full table-auto">
        <thead className='text-center border'>
          <tr className="text-center border uppercase text-sm leading-normal">
            <th className="py-3 px-6  border">ID</th>
            <th className="py-3 px-6 border">Username</th>
            <th className="py-3 px-6 border">Email</th>
            <th className="py-3 px-6 border">Role</th>
            <th className="py-3 px-6 text-center border">Actions</th>
          </tr>
        </thead>
        <tbody className="border text-sm font-bold border">
          {customUsers.map((customUser) => (
            <tr key={customUser.id} className="border-b border-gray-200 hover:bg-gray-800 border">
              <td className="py-3 px-6 text-left border">{customUser.id}</td>
              <td className="py-3 px-6 text-left border">{customUser.username}</td>
              <td className="py-3 px-6 text-left border">{customUser.email}</td>
              <td className="py-3 px-6 text-left border">{customUser.role}</td>
              <td className="py-3 px-6 text-center">
                <button className="bg-red-500 text-white  px-2 py-1 rounded" onClick={() => deleteCustomUser(customUser.id)}>Delete</button>
                <button className="ml-2 bg-green-500 text-white px-2 py-1 rounded" onClick={() => updateCustomUser(customUser.id, { ...customUser })}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-center">Add Custom User</h2>
      <form onSubmit={(e) => { e.preventDefault(); createNewCustomUser(newCustomUserData); }} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={newCustomUserData.username}
          onChange={(e) => setNewCustomUserData({ ...newCustomUserData, username: e.target.value })}
          className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newCustomUserData.email}
          onChange={(e) => setNewCustomUserData({ ...newCustomUserData, email: e.target.value })}
          className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
                <input
          type="password"
          name="password"
          placeholder="Password"
          value={newCustomUserData.password}
          onChange={(e) => setNewCustomUserData({...newCustomUserData, password: e.target.value })}
          className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={newCustomUserData.role}
          onChange={(e) => setNewCustomUserData({...newCustomUserData, role: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        <button type="submit"  className="relative inline-flex items-center justify-center p-0.5 overflow-hidden focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 align-center m-5">Add</button>
      </form>
    </div>
    
  );
};

export default CustomUser;


