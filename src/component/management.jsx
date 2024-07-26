import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const BusExpenditureManager = ({ expenditureData }) => {
  if (!expenditureData) {
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

  const identifyPoorManagement = (expenditureData) => {
    let poorManagementIndicator = "No indicators of poor management";

    if (expenditureData.monthly_fuel_cost > 126000) {
      poorManagementIndicator = "High monthly fuel cost may indicate poor management";
    }
    if (expenditureData.insurance_cost > 14400) {
      poorManagementIndicator = "High insurance cost may indicate poor management";
    }
    if (expenditureData.sacco_payment > 27000) {
      poorManagementIndicator = "High sacco payment may indicate poor management";
    }
    if (expenditureData.owner_payment > 195000) {
      poorManagementIndicator = "High owner payment may indicate poor management";
    }
    if (expenditureData.driver_payment > 60000) {
      poorManagementIndicator = "High driver payment may indicate poor management";
    }
    if (expenditureData.conductor_payment > 39000) {
      poorManagementIndicator = "High conductor payment may indicate poor management";
    }
    if (expenditureData.service_cost > 3500) {
      poorManagementIndicator = "High service cost may indicate poor management";
    }
    if (expenditureData.service_date > 126000) {
      poorManagementIndicator = "Service required";
    }

    return poorManagementIndicator;
  };

  const poorManagementIndicator = identifyPoorManagement(expenditureData);

  return (
    <div>
      <h1>Bus Expenditure Details</h1>
      <p>Monthly Fuel Cost: {expenditureData.monthly_fuel_cost}</p>
      <p>Insurance Cost: {expenditureData.insurance_cost}</p>
      <p>Sacco Payment: {expenditureData.sacco_payment}</p>
      <p>Owner Payment: {expenditureData.owner_payment}</p>
      <p>Driver Payment: {expenditureData.driver_payment}</p>
      <p>Conductor Payment: {expenditureData.conductor_payment}</p>
      <p>Service Cost: {expenditureData.service_cost}</p>
      <p>Service Date: {expenditureData.service_date}</p>
      <p>Last Tyre Replacement: {expenditureData.last_tyre_replacement}</p>
      <p>Next Inspection Date: {expenditureData.next_inspection_date}</p>
      <p>Poor Management Indicator: {poorManagementIndicator}</p>
    </div>
  );
};

export default BusExpenditureManager;