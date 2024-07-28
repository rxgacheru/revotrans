import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = () => {
  const [reviewText, setReviewText] = useState('');
  const [reviewUser, setReviewUser] = useState('');
  const [reviewBus, setReviewBus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewData = {
      review_text: reviewText,
      review_user: reviewUser,
      review_bus: reviewBus,
    };

    axios.post('http://127.0.0.1:8000/api/bus-reviews/', reviewData)
      .then(response => {
        console.log(response.data);
        setReviewText('');
        setReviewUser('');
        setReviewBus('');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <section className="p-4  ">
      <div className="flex flex-col items-center mx-auto md:h-screen lg:py-0 ">
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 backdrop-filter backdrop-blur-lg">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-center">
              Give us a review!
            </h1>
            <form action='http://127.0.0.1:8000/api/bus-reviews/' onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium " htmlFor="reviewText">Review Text:</label>
                <textarea className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="reviewText"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium " htmlFor="reviewUser">Review User:</label>
                <input className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  id="reviewUser"
                  value={reviewUser}
                  onChange={(e) => setReviewUser(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium " htmlFor="reviewBus">Review Bus:</label>
                <input className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  id="reviewBus"
                  value={reviewBus}
                  onChange={(e) => setReviewBus(e.target.value)}
                />
              </div>
              <button onSubmit={handleSubmit} className="  relative inline-flex items-center justify-center p-0.5 mb-2 me-8 px- overflow-hidden   text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-300 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 font-large rounded-full text-sm text-center ml-20 text-2xl my-7 font-bold" type="submit">
                <span className=" p-6 relative px-12 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Submit Review</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewForm;