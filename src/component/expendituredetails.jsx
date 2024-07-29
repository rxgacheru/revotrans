import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const ExpenditureDetails = () => {
  const [expenditureData, setExpenditureData] = useState([]);

  const fetchExpenditureData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/bus-expenditures/');
      setExpenditureData(response.data);
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  };

  useEffect(() => {
    fetchExpenditureData();
  }, []);

  if (expenditureData.length === 0) {
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
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-white backdrop-filter backdrop-blur-lg">
    <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-white dark:text-white backdrop-filter backdrop-blur-lg  ">
      Bus Expenditure Details
    </caption>
    <thead className="text-xs text-gray-300 uppercase  dark:text-white">
      <tr>
        <th scope="col" className="px-6 py-3">
          Monthly Fuel Cost
        </th>
        <th scope="col" className="px-6 py-3">
          Insurance Cost
        </th>
        <th scope="col" className="px-6 py-3">
          Sacco Payment
        </th>
        <th scope="col" className="px-6 py-3">
          Owner Payment
        </th>
        <th scope="col" className="px-6 py-3">
          Driver Payment
        </th>
        <th scope="col" className="px-6 py-3">
          Conductor Payment
        </th>
        <th scope="col" className="px-6 py-3">
          Service Cost
        </th>
        <th scope="col" className="px-6 py-3">
          Service Date
        </th>
        <th scope="col" className="px-6 py-3">
          Last Tyre Replacement
        </th>
        <th scope="col" className="px-6 py-3">
          Next Inspection Date
        </th>
      </tr>
    </thead>
    <tbody>
      {expenditureData.map((expenditure) => (
        <tr key={expenditureData.bus_id}>
          <td className="border px-6 py-3">{expenditure.monthly_fuel_cost}</td>
          <td className="border px-6 py-3">{expenditure.insurance_cost}</td>
          <td className="border px-6 py-3">{expenditure.sacco_payment}</td>
          <td className="border px-6 py-3">{expenditureData.owner_payment}</td>
          <td className="border px-6 py-3">{expenditure.driver_payment}</td>
          <td className="border px-6 py-3">{expenditure.conductor_payment}</td>
          <td className="border px-6 py-3">{expenditure.service_cost}</td>
          <td className="border px-6 py-3">{expenditure.service_date}</td>
          <td className="border px-6 py-3">{expenditure.last_tyre_replacement}</td>
          <td className="border px-6 py-3">{expenditure.next_inspection_date}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
};

export default ExpenditureDetails;
