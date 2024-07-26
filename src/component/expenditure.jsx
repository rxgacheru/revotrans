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
    <section className="bg-gray-50 dark:bg-gray-900 p-4 w-full md:w-1/2 mx-auto">
  <div className="flex flex-col items-center">
    <div className="w-full rounded-lg shadow-md dark:border dark:border-gray-700">
      <div className="p-6 md:p-8 space-y-4 md:space-y-6">
        <h1 className="text-xl md:text-2xl font-bold leading-tight text-gray-500 text-center">
          Welcome!
        </h1>
        <form onSubmit={handleSubmit} action="http://127.0.0.1:8000/api/bus-expenditures/">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="monthly_fuel_cost" className="block mb-2 text-sm font-medium text-gray-300">
                Monthly Fuel Cost:
              </label>
              <input
                id="monthly_fuel_cost"
                className="input-style"
                type="number"
                name="monthly_fuel_cost"
                value={expenditureData.monthly_fuel_cost}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="insurance_cost" className="block mb-2 text-sm font-medium text-gray300">
                Insurance Cost:
              </label>
              <input
                id="insurance_cost"
                className="input-style"
                type="number"
                name="insurance_cost"
                value={expenditureData.insurance_cost}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="sacco_payment" className="block mb-2 text-sm font-medium text-gray-300">
                Sacco Payment:
              </label>
              <input
                id="sacco_payment"
                className="input-style"
                type="number"
                name="sacco_payment"
                value={expenditureData.sacco_payment}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="owner_payment" className="block mb-2 text-sm font-medium text-gray-300">
                Owner Payment:
              </label>
              <input
                id="owner_payment"
                className="input-style"
                type="number"
                name="owner_payment"
                value={expenditureData.owner_payment}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="driver_payment" className="block mb-2 text-sm font-medium text-gray-300">
                Driver Payment:
              </label>
              <input
                id="driver_payment"
                className="input-style"
                type="number"
                name="driver_payment"
                value={expenditureData.driver_payment}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="conductor_payment" className="block mb-2 text-sm font-medium text-gray-300">
                Conductor Payment:
              </label>
              <input
                id="conductor_payment"
                className="input-style"
                type="number"
                name="conductor_payment"
                value={expenditureData.conductor_payment}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="service_cost" className="block mb-2 text-sm font-medium text-gray-300">
                Service Cost:
              </label>
              <input
                id="service_cost"
                className="input-style"
                type="number"
                name="service_cost"
                value={expenditureData.service_cost}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="service_date" className="block mb-2 text-sm font-medium text-gray-300">
                Service Date:
              </label>
              <input
                id="service_date"
                className="input-style"
                type="date"
                name="service_date"
                value={expenditureData.service_date}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="last_tyre_replacement" className="block mb-2 text-sm font-medium text-gray-300">
                Last Tyre Replacement:
              </label>
              <input
                id="last_tyre_replacement"
                className="input-style"
                type="date"
                name="last_tyre_replacement"
                value={expenditureData.last_tyre_replacement}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="next_inspection_date" className="block mb-2 text-sm font-medium text-gray-300">
                Next Inspection Date:
              </label>
              <input
                id="next_inspection_date"
                className="input-style"
                type="date"
                name="next_inspection_date"
                value={expenditureData.next_inspection_date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
          <button onClick={handleSubmit} type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-8 px- overflow-hidden   text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm text-center ml-20 text-2xl my-7 font-bold" ><span class="relative px-12 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Submit</span></button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

  );
};

export default Expenditure;