/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bus from './component/bus';
import BookingDetails from './component/bookingdetails';
import BusDetails from './component/buslist';
import ExpenditureDetails from 'src/component/expendituredetails';
import Expenditure from './component/expenditure';
import Routess from './component/route';
import BusExpenditureDetails from './component/management';
import Review from './component/reviews.';



const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">Admin Dashboard</h1>
      <div className="mb-8">
        <BookingDetails />
      </div>

      <div className="mb-8">
        <BusDetails />
      </div>

      <div className="mb-8">
        <ExpenditureDetails />
      </div>

      <div className="mb-8">
        <Routess />
      </div>

      <div className="mb-8">
        <BusExpenditureDetails />
      </div>

      <div className="mb-8">
        <Expenditure />
      </div>

      <div className="mb-8">
         <Review />
      </div>

      <div className="mb-8">
        <Bus /> 
      </div>

    </div>
  );
};
export default AdminDashboard; */





const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">Admin Dashboard</h1>
      <div className="mb-8">
      < a href='/component/bookingdetails'>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden   text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm  text-center me-2 mb-2 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-2xl font-bold object-contain">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Booking Details
           </span>
           </button></a>
      </div>

      <div className="mb-8">
      < a href='/component/bus'>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden   text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm  text-center me-2 mb-2 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-2xl font-bold object-contain">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Buses
           </span>
           </button></a>
      </div>

      <div className="mb-8">
      < a href='/component/buslist'>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden   text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm  text-center me-2 mb-2 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-2xl font-bold object-contain">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Bus List
           </span>
           </button></a>
      </div>

      <div className="mb-8">
      < a href='/component/expenditure'>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden   text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm  text-center me-2 mb-2 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-2xl font-bold object-contain">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Expenditure
           </span>
           </button></a>
      </div>

      <div className="mb-8">
      < a href='/component/expendituredetails'>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden   text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm  text-center me-2 mb-2 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-2xl font-bold object-contain">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Expenditure Details
           </span>
           </button></a>
      </div>

      <div className="mb-8">
      < a href='/component/reviews'>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden   text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm  text-center me-2 mb-2 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-2xl font-bold object-contain">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Reviews
           </span>
           </button></a>
      </div>

      <div className="mb-8">
      < a href='/component/expenditure'>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden   text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm  text-center me-2 mb-2 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-2xl font-bold object-contain">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Expenditure
           </span>
           </button></a>
      </div>

      <div className="mb-8">
      < a href='/component/route'>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden   text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm  text-center me-2 mb-2 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-2xl font-bold object-contain">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Routes
           </span>
           </button></a>
      </div>

    </div>
  );
};
export default AdminDashboard; 

