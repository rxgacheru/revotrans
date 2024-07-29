import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*import Navbar from './component/Navbar';*/
import Register from './component/register';
import Login from './component/login';
import Logout from './component/logout';
import Passwordresest from './component/passwordreset';
import Booking from './component/booking';
import BookingDetails from './component/bookingdetails';
import BusForm from './component/bus';
import BusesDetails from './component/buslist';
import Expenditure from './component/expenditure';
import ExpenditureDetails from './component/expendituredetails';
import Review from './component/reviews';
import Routess from './component/route';
import BusExpenditureDetails from './component/management';
import Home from './component/Home';
import Footer from './component/Footer';
import AdminDashboard from './component/Dashboard';
import './App.css'; 
import UserList from './component/users';
import ContactForm from './component/Contact';
import BusExpenditureManager from './component/management';
import Explore from './component/Explore';
import Background from './component/Background/Background';
import Navbar from './component/Navbar/Navbar';
import Bus from './component/BusDetail';
import About from './component/About';
import Sidebar from './component/Sidebar';


let heroData = [
  { textOne: 'Revo', textTwo: 'Trans', image: 'bus3.jpg' },
  { textOne: 'Reliable', textTwo: 'Trustworthy', image: 'bus3.jpg' },
  { textOne: 'Book', textTwo: 'Today', image: 'bus3.jpg' },
];

const App = () => {
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
    }, 3000);
  }, []);


  return (
    <Router>

            <Background playStatus={playStatus} heroCount={heroCount} />
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
              <Route path='/component/bus' element={<BusForm />} />
              <Route path='/component/Sidebar' element={<Sidebar />} />
              <Route path='/component/buslist' element={<BusesDetails />} />
              <Route path='/component/expenditure' element={<Expenditure />} />
              <Route path='/component/expendituredetails' element={<ExpenditureDetails />} />
              <Route path='/component/reviews' element={<Review />} />
              <Route path='/component/route' element={<Routess />} />
              <Route path='/component/management' element={<BusExpenditureDetails />} /> 
              <Route path='/component/Dashboard' element={<AdminDashboard />} /> 
              <Route path='/component/users' element={<UserList />} />
              <Route path='/component/About' element={<About />} />
              <Route path='/component/Contact' element={<ContactForm />} /> 
              <Route path='/component/management' element={<BusExpenditureManager />} /> 
              <Route path="/component/Explore" element={<Explore />} />
              <Route path="/bus/:id" element={<Bus />} />

              

 

            </Routes>
            <Footer />
           
    </Router>
  )
}

export default App;