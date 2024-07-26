import React, { useEffect, useState } from 'react';
import ReviewForm from './ReviewForm';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

function BusReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    client.get('/api/bus-reviews/')
     .then(response => response.data)
     .then(data => setReviews(data))
     .catch(error => console.log(error));
  }, []);

  return (
    <section>
      <div >
      <div>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-white">
    
      <ReviewForm />
      <h1 className='text-2xl font-bold mb-2 mt-5 text-center'>Bus Reviews</h1>
      {reviews.map(review => (
        <div key={review.id} className='border p-3 backdrop-filter backdrop-blur-lg  ml-9 mr-9 mt-8 mb-8
        rounded-lg font-bold mt-5 mt-16'>
          <h3 className='text-2xl font-bold mb-2 mt-5 text-center '>Review ID: {review.id}</h3>
          <p className=''>Review Text: {review.review_text}</p>
          <p className=''>Reviewer: {review.review_user.username}</p>
          <p className=''>Bus ID: {review.review_bus.bus_id}</p>
          <p className=''>Date: {review.review_date}</p>
        </div>
      ))}
      
    </div>
    </div>
    </div>
    </section>
  );
}

export default BusReviewList;