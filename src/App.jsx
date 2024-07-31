import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*import Navbar from './component/Navbar';*/
import Register from './component/register';
import Login from './component/login';
import Logout from './component/logout';
import Passwordresest from './component/passwordreset';
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
import Prop from './component/Prop';
import SingleBookingDetails from './component/SingleBookingDetails';
import BookingDetails from './component/BookingDetails';
import BookingForm from './component/BookingForm';

let heroData = [
  { textOne: 'Revo', textTwo: 'Trans', image: 'bus3.jpg' },
  { textOne: 'Reliable', textTwo: 'Trustworthy', image: 'bus3.jpg' },
  { textOne: 'Book', textTwo: 'Today', image: 'bus3.jpg' },
];

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user.username);
  };
  
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);
  const [bookings, setBookings] = useState([]);
  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/bookings/');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  useEffect(() => {
    setInterval(() => {
      setHeroCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
    }, 3000);
  }, []);


  return (
    <Router>

            <Background playStatus={playStatus} heroCount={heroCount} />
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            
            <Routes>
              <Route path="/" element={<Home  isLoggedIn={isLoggedIn} username={username} />} />
              <Route path="/component/register" element={<Register  setIsLoggedIn={setIsLoggedIn} onLogin={handleLogin} />} />
              <Route path='/component/home' element={<Home isLoggedIn={isLoggedIn} username={username} />} />
              <Route path='/component/login' element={<Login setIsLoggedIn={setIsLoggedIn} onLogin={handleLogin} />} />
              <Route path='/component/logout' element={<Logout />} />
              <Route path='/component/passwordreset' element={<Passwordresest />} />
               
              <Route path='/component/BookingForm'  element={<BookingForm fetchBookings={fetchBookings} />} />
              <Route path='/component/bookings' element={<BookingDetails fetchBookings={fetchBookings} bookings={bookings} />} />
              <Route path='/component/bookings/:id' element={<SingleBookingDetails />} />

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
              <Route path='/component/Prop' element={<Prop />} />

 

            </Routes>
            <Footer />
           
    </Router>
  )
}

export default App;