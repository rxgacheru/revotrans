import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
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
  const authToken = 'itpf yuxl viak jkie';

  const fetchCustomUsers = async () => {
    try {
      const response = await client.get('/api/users/', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setCustomUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createNewCustomUser = async (newCustomUserData) => {
    try {
      const response = await client.post('/api/users/', newCustomUserData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log('New custom user created:', response.data);
      fetchCustomUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const updateCustomUser = async (customUserId, updatedCustomUserData) => {
    try {
      const response = await client.put(`/api/users/${customUserId}/`, updatedCustomUserData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log('Custom user updated:', response.data);
      fetchCustomUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCustomUser = async (customUserId) => {
    try {
      const response = await client.delete(`/api/users/${customUserId}/`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log('Custom user deleted:', response.data);
      fetchCustomUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-4">
      <h1 className="text-2xl font-bold mb-4">Custom User List</h1>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Username</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Role</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {customUsers.map((customUser) => (
            <tr key={customUser.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">{customUser.id}</td>
              <td className="py-3 px-6 text-left">{customUser.username}</td>
              <td className="py-3 px-6 text-left">{customUser.email}</td>
              <td className="py-3 px-6 text-left">{customUser.role}</td>
              <td className="py-3 px-6 text-center">
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => deleteCustomUser(customUser.id)}>Delete</button>
                <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={() => updateCustomUser(customUser.id, { ...customUser })}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mt-8 mb-4">Add Custom User</h2>
      <form onSubmit={(e) => { e.preventDefault(); createNewCustomUser(newCustomUserData); }} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={newCustomUserData.username}
          onChange={(e) => setNewCustomUserData({ ...newCustomUserData, username: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newCustomUserData.email}
          onChange={(e) => setNewCustomUserData({ ...newCustomUserData, email: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
                <input
          type="password"
          name="password"
          placeholder="Password"
          value={newCustomUserData.password}
          onChange={(e) => setNewCustomUserData({...newCustomUserData, password: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={newCustomUserData.role}
          onChange={(e) => setNewCustomUserData({...newCustomUserData, role: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      </form>
    </div>
  );
};

export default CustomUser;


