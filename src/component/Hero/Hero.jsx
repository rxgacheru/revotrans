import React from 'react';
import arrowButton from '../../assets/arrow-btn.png';
import playIcon from '../../assets/play_icon.png';
import pauseIcon from '../../assets/pause_icon.png';
import "./Hero.css"





const Hero = ({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData[heroCount].textOne}</p>
        <p>{heroData[heroCount].textTwo}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the our site</p>
        <img src={arrowButton} />
      </div>
      <div className="hero-play">
        <ul className="hero-dots">
          {heroData.map((item, index) => (
            <li
              key={index}
              className={heroCount === index ? 'hero-dot orange' : 'hero-dot'}
              onClick={() => setHeroCount(index)}
            />
          ))}
        </ul>
        <img
          src={playStatus ? pauseIcon : playIcon}
          onClick={() => setPlayStatus(!playStatus)}
          className="hero-play-icon"
        />
      </div>
    </div>
  );
};


export default Hero;