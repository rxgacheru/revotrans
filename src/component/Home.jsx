const Home = () => {
  return (
    <div className="flex items-centre  mb-40 px-8">
      <div className="   mt-16 lg:mt-28 ml-28 mr-28 items-center justify-center ">
        <h1 className="font-bold text-5xl mb-6 text-white text-center">Travel With RevoTrans</h1>
        <p className="text-xl mb-8 text-white items-center text-center">
          RevoTrans is the go-to destination for SACCO companies to manage their buses, drivers, and bus routes. RevoTrans also enables travelers to book. It boasts the largest bus community globally.
        </p>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center">
          <a href="/component/register">
            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-3 me-2 mb-2 dark:focus:ring-yellow-900">
              
                Get Started
            </button>
          </a>
          <a href="/component/Contact">
            <button className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-3 me-2 mb-2 dark:focus:ring-yellow-900">
              
                Contact Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
  
}

export default Home;


