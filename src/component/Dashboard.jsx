/*import React from 'react';
import BookingDetails from './bookingdetails';
import BusesDetails from './buslist';
import ExpenditureDetails from './expendituredetails';
import Route from './route';
import Expenditure from './expenditure';
import BusReviewList from './reviews';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">Admin Dashboard</h1>
      <div className="mb-8">
        <BookingDetails />
      </div>

      <div className="mb-8">
        <BusesDetails />
      </div>

      <div className="mb-8">
        <ExpenditureDetails />
      </div>

      <div className="mb-8">
        <Route />
      </div>

      <div className="mb-8">
        <ExpenditureDetails />
      </div>

      <div className="mb-8">
        <Expenditure />
      </div>

      <div className="mb-8">
         <BusReviewList />
      </div>

      <div className="mb-8">
      </div>

    </div>
  );
};
export default AdminDashboard; */






const AdminDashboard = () => {
  return (
    <div>
      <section className="mb-64 ">
      <div className="flex flex-col items-center mx-auto md:h-screen lg:py-0 ">
      <div className="w-full backdrop-filter backdrop-blur-lg rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center">
                  Admin Dashboard
                </h1>
     
      <div>
      <a href="/component/buslist">
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center mt-4">
          <button type="submit" className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden   focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Bus list</button>
        </div></a>
        <a href="/component/booking">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center mt-4">
          <button type="submit" className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden   focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Booking</button>
        </div></a>
        <a href="/component/bookingdetails">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center mt-4">
          <button type="submit" className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden   focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Booking Details</button>
        </div></a>
        <a href="/component/bus">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center mt-4">
          <button type="submit" className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden   focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Add Bus</button>
        </div></a>
          </div>
          <a href="/component/expenditure">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center mt-4">
          <button type="submit" className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden   focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Expenditure</button>
        </div></a>
        <a href="/component/expendituredetails">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center mt-4">
          <button type="submit" className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden   focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Expenditure Details</button>
        </div></a>
        <a href="/component/users">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center mt-4">
          <button type="submit" className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden   focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Users</button>
        </div></a>
        <a href="/component/reviews">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center mt-4">
          <button type="submit" className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden   focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Reviews</button>
        </div></a>
        <a href="/component/routes">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center mt-4">
          <button type="submit" className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden   focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Routes</button>
        </div></a>
      </div>
      </div>
      </div>
      </section>
    </div>
  );
};
export default AdminDashboard; 

