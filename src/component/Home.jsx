const Home = () => {
  return (
    <div className="flex mb-40">
      <div className="w-1/2 ml-8">
        <h1 className="mt-28 font-bold text-5xl">What is RevoTrans?</h1>
        <p className='text-xl '>RevoTrans is the go-to destination for SACCO companies to manage their buses, drivers and bus routes. RevoTrans also enables travellers to book. It boasts the largest bus community globally</p>
        < a href='/job'>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden   text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm text-center ml-20 text-2xl my-7 font-bold">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Book Today
           </span>
           </button></a>
        < a href='/contact'>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden   text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm  text-center me-2 mb-2 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-2xl font-bold object-contain">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Contact Us
           </span>
           </button></a></div>
      <div className='w-1/2 h-9 ml-12 mt-4 mb-5 mt-24'>
        <img src='src\assets\revotrans-bus2.jpg' className='mx-auto object-contain md:object-scale-down flex h-auto max-w-lg mt-20 md:grid-cols-2 rounded-lg' /></div>
    </div>
    
  )
}

export default Home;



