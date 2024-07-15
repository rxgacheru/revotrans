import React, { useEffect, useState } from 'react';

function BusReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/api/bus-reviews/')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Bus Reviews</h1>
      {reviews.map(review => (
        <div key={review.id}>
          <h3>Review ID: {review.id}</h3>
          <p>Review Text: {review.review_text}</p>
          <p>Reviewer: {review.review_user.username}</p>
          <p>Bus ID: {review.review_bus.bus_id}</p>
          <p>Date: {review.review_date}</p>
        </div>
      ))}
    </div>
  );
}

export default BusReviewList; 


