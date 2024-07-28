import React from 'react';
import { useState } from 'react';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const Expenditure = () => {
  const [expenditureData, setExpenditureData] = useState({
    monthly_fuel_cost: 0,
    insurance_cost: 0,
    sacco_payment: 0,
    owner_payment: 0,
    driver_payment: 0,
    conductor_payment: 0,
    service_cost: 0,
    service_date: '',
    last_tyre_replacement: '',
    next_inspection_date: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/bus-expenditures/', expenditureData);
      console.log(response.data);
      
      window.location.href = '/expenditure-details';
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setExpenditureData({ ...expenditureData, [event.target.name]: event.target.value });
  };

  return (
    <section className="p-4 w-full md:w-1/2 mx-auto">
  <div className="flex flex-col items-center backdrop-filter backdrop-blur-lg  mx-auto md:h-screen lg:py-0 ">
    <div className="w-full rounded-lg shadow-md md:mt-0 sm:max-w-md xl:p-0  ">
      <div className="p-6 md:p-8 space-y-4 md:space-y-6">
        <h1 className="text-xl md:text-2xl font-bold leading-tight text-white text-center">
          Welcome!
        </h1>
        <form  action="http://127.0.0.1:8000/api/bus-expenditures/">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="monthly_fuel_cost" className="block mb-2 text-sm font-medium text-white">
                Monthly Fuel Cost:
              </label>
              <input
                id="monthly_fuel_cost"
                className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="number"
                name="monthly_fuel_cost"
                value={expenditureData.monthly_fuel_cost}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="insurance_cost" className="block mb-2 text-sm font-medium text-white">
                Insurance Cost:
              </label>
              <input
                id="insurance_cost"
                className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="number"
                name="insurance_cost"
                value={expenditureData.insurance_cost}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="sacco_payment" className="block mb-2 text-sm font-medium text-white">
                Sacco Payment:
              </label>
              <input
                id="sacco_payment"
                className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="number"
                name="sacco_payment"
                value={expenditureData.sacco_payment}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="owner_payment" className="block mb-2 text-sm font-medium text-white">
                Owner Payment:
              </label>
              <input
                id="owner_payment"
                className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="number"
                name="owner_payment"
                value={expenditureData.owner_payment}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="driver_payment" className="block mb-2 text-sm font-medium text-white">
                Driver Payment:
              </label>
              <input
                id="driver_payment"
                className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="number"
                name="driver_payment"
                value={expenditureData.driver_payment}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="conductor_payment" className="block mb-2 text-sm font-medium text-white">
                Conductor Payment:
              </label>
              <input
                id="conductor_payment"
                className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="number"
                name="conductor_payment"
                value={expenditureData.conductor_payment}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="service_cost" className="block mb-2 text-sm font-medium text-white">
                Service Cost:
              </label>
              <input
                id="service_cost"
                className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="number"
                name="service_cost"
                value={expenditureData.service_cost}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="service_date" className="block mb-2 text-sm font-medium text-white">
                Service Date:
              </label>
              <input
                id="service_date"
                className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="date"
                name="service_date"
                value={expenditureData.service_date}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="last_tyre_replacement" className="block mb-2 text-sm font-medium text-white">
                Last Tyre Replacement:
              </label>
              <input
                id="last_tyre_replacement"
                className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="date"
                name="last_tyre_replacement"
                value={expenditureData.last_tyre_replacement}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="next_inspection_date" className="block mb-2 text-sm font-medium text-white">
                Next Inspection Date:
              </label>
              <input
                id="next_inspection_date"
                className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="date"
                name="next_inspection_date"
                value={expenditureData.next_inspection_date}
                onChange={handleChange}
              />
            </div>
            
          </div>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center mt-4">
          <button onClick={handleSubmit} type="submit" className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden   focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

  );
};

export default Expenditure;