import React from 'react';



const DigitalClock = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <div className="text-white shadow-lg rounded-lg p-6 backdrop-filter backdrop-blur-lg bg-opacity-30">
        <h2 className="text-2xl font-semibold mb-4">Digital Clock</h2>
        <div className="text-8xl font-bold">{time.toLocaleTimeString()}</div>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8 text-center text-white">Admin Dashboard</h1>
      <nav className="backdrop-filter backdrop-blur-lg p-4 rounded-lg mb-8">
        <div className="flex justify-center space-x-4">
          <a href="/component/buslist">
            <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-4 py-2 dark:focus:ring-yellow-900">
              Bus List
            </button>
          </a>
          <a href="/component/BookingDetails">
            <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-4 py-2 dark:focus:ring-yellow-900">
              Booking Details
            </button>
          </a>
          <a href="/component/bus">
            <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-4 py-2 dark:focus:ring-yellow-900">
              Add Bus
            </button>
          </a>
          <a href="/component/expenditure">
            <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-4 py-2 dark:focus:ring-yellow-900">
              Expenditure
            </button>
          </a>
          <a href="/component/expendituredetails">
            <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-4 py-2 dark:focus:ring-yellow-900">
              Expenditure Details
            </button>
          </a>
          <a href="/component/users">
            <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-4 py-2 dark:focus:ring-yellow-900">
              Users
            </button>
          </a>
          <a href="/component/reviews">
            <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-4 py-2 dark:focus:ring-yellow-900">
              Reviews
            </button>
          </a>
          <a href="/component/route">
            <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-4 py-2 dark:focus:ring-yellow-900">
              Routes
            </button>
          </a>
        </div>
      </nav>
      <div className="">
      </div>
    </div>
  );
};

export default AdminDashboard;
