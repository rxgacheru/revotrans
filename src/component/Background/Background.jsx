import React from 'react';
import "./Background.css"
import video1 from '../../assets/video1.mp4';
import bus3 from '../../assets/bus3.jpg';
import booking from '../../assets/booking.jpg';

import bus2 from '../../assets/bus2.jpg';



const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      
      <video autoplay loop muted className="background">
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={bus2} className="background" />;
  } else if (heroCount === 1) {
    return <img src={bus3} className="background" />;
  } else {
    return <img src={booking} className="background" />;
  }
};


export default Background;