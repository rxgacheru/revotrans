import React from 'react';
import { useState } from 'react';
import axios from 'axios';

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Monthly Fuel Cost:</label>
        <input
          type="number"
          name="monthly_fuel_cost"
          value={expenditureData.monthly_fuel_cost}
          onChange={handleChange}
        />
        <br />
        <label>Insurance Cost:</label>
        <input
          type="number"
          name="insurance_cost"
          value={expenditureData.insurance_cost}
          onChange={handleChange}
        />
        <br />
        <label>Sacco Payment:</label>
        <input
          type="number"
          name="sacco_payment"
          value={expenditureData.sacco_payment}
          onChange={handleChange}
        />
        <br />
        <label>Owner Payment:</label>
        <input
          type="number"
          name="owner_payment"
          value={expenditureData.owner_payment}
          onChange={handleChange}
        />
        <br />
        <label>Driver Payment:</label>
        <input
          type="number"
          name="driver_payment"
          value={expenditureData.driver_payment}
          onChange={handleChange}
        />
        <br />
        <label>Conductor Payment:</label>
        <input
          type="number"
          name="conductor_payment"
          value={expenditureData.conductor_payment}
          onChange={handleChange}
        />
        <br />
        <label>Service Cost:</label>
        <input
          type="number"
          name="service_cost"
          value={expenditureData.service_cost}
          onChange={handleChange}
        />
        <br />
        <label>Service Date:</label>
        <input
          type="date"
          name="service_date"
          value={expenditureData.service_date}
          onChange={handleChange}
        />
        <br />
        <label>Last Tyre Replacement:</label>
        <input
          type="date"
          name="last_tyre_replacement"
          value={expenditureData.last_tyre_replacement}
          onChange={handleChange}
        />
        <br />
        <label>Next Inspection Date:</label>
        <input
          type="date"
          name="next_inspection_date"
          value={expenditureData.next_inspection_date}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Expenditure;