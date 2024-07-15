import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Register from './component/register';
import Login from './component/login';
import Logout from './component/logout';
import Passwordresest from './component/passwordreset';
import Booking from './component/booking';
import BookingDetails from './component/bookingdetails';
import Bus from './component/bus';
import BusDetails from './component/buslist';
import Expenditure from './component/expenditure';
import ExpenditureDetails from './component/expendituredetails';
import Review from './component/reviews';
import Routess from './component/route';
import BusExpenditureDetails from './component/management';
import Home from './component/Home';
import Footer from './component/Footer';
import AdminDashboard from './component/Dashboard';
import './App.css'; 



const App = () => {
  

  return (
    <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/component/register" element={<Register />} />
              <Route path='/component/home' element={<Home />} />
              <Route path='/component/login' element={<Login />} />
              <Route path='/component/logout' element={<Logout />} />
              <Route path='/component/passwordreset' element={<Passwordresest />} />
              <Route path='/component/booking' element={<Booking />} />
              <Route path='/component/bookingdetails' element={<BookingDetails />} />
              <Route path='/component/bus' element={<Bus />} />
              <Route path='/component/buslist' element={<BusDetails />} />
              <Route path='/component/expenditure' element={<Expenditure />} />
              <Route path='/component/expendituredetails' element={<ExpenditureDetails />} />
              <Route path='/component/reviews' element={<Review />} />
              <Route path='/component/route' element={<Routess />} />
              <Route path='/component/management' element={<BusExpenditureDetails />} /> 
              <Route path='/component/Dashboard' element={<AdminDashboard />} /> 
            </Routes>
            <Footer />
    </Router>
  )
}

export default App;