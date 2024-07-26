import { useLocation } from 'react-router-dom';
import Review from './reviews';


const Bus = () => {
  const { state: bus } = useLocation();
  return (
    <div>
    <div className='p-4 text-white backdrop-filter backdrop-blur-lg max-w-md mx-auto  shadow-lg rounded-lg overflow-hidden'>
      <h1 className='text-2xl font-bold mb-5 text-center '>Bus Details</h1>
      <p className=''><strong>Bus ID:</strong> {bus.id}</p>
      <p className=''><strong>Bus Registration:</strong> {bus.bus_reg}</p>
      <p className=''><strong>Bus Manufacture:</strong> {bus.bus_manufacture}</p>
      <p className=''><strong>Bus Value:</strong> {bus.bus_price}</p>
      <p className=''><strong>Bus Capacity:</strong> {bus.bus_capacity}</p>
      <p className=''><strong>Owner Identification:</strong> {bus.bus_owner_identification}</p>
      <p className=''><strong>Owner Contact:</strong> {bus.bus_owner_contact}</p>
      <p className=''><strong>Bus Driver:</strong> {bus.bus_driver}</p>
      <p className=''><strong>Driver Contact:</strong> {bus.bus_driver_contact}</p>
      <p className=''><strong>Bus Conductor:</strong> {bus.bus_conductor}</p>
      <p className=''><strong>Conductor Contact:</strong> {bus.bus_conductor_contact}</p>
      <p className=''><strong>Conductor Identification:</strong> {bus.bus_conductor_identification}</p>

      <div className='mt-4'>
        <h2 className='text-lg text-white font-bold mb-2'>Reviews</h2>
        <div className='flex mb-2'>
          <span className='text-yellow-400'>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
          </span>
          <span className='ml-2 text-white'>4.5/5</span>
        </div>
        <p className=''></p>
      </div>

    </div>
    <Review />
    </div>
  );
};

export default Bus;
