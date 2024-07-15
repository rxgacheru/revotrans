import {Link} from 'react-router-dom';

const Navbar = () => {
  
  return (
    <nav className='bg-black py-4'>
      <div className="container mx-auto flex justify-between items-center">
      <ul className="flex justify-center space-x-4">
      <li>
        <Link to='/' className="text-gray-300"></Link>
        </li>
        <li>
        <Link to='/component/Home' className="text-gray-300">RevoTrans</Link>
        </li>
        <li>
          <Link to='/component/register' className="text-gray-300">Register</Link>
        </li>
        <li>
          <Link to='/component/login' className="text-gray-300">Sign In</Link>
        </li>
        <li>
          <Link to='/component/logout' className="text-gray-300">Sign Out</Link>
        </li>
        <li>
          <Link to='/component/booking' className="text-gray-300">Bookings</Link>
        </li>
        <li>
          <Link to='/component/bookingdetails' className="text-gray-300">Bookings Details</Link>
        </li> 
        <li>
          <Link to='/component/bus' className="text-gray-300">Bus </Link>
        </li>   
        <li>
          <Link to='/component/reviews' className="text-gray-300">Reviews</Link>
        </li> 
      </ul>
      
      </div>
    </nav>

  )
}

export default Navbar;