import React from 'react';
import hotdogImage from '../assets/images/hotdog.png';

const Banner = () => (
    <div className="flex-banner">
        <div className="logo-container">
            <img src={hotdogImage} alt="" />
        </div>
        <p className="slogan-title">Dirty Dogs serves all-beef, vegan and vegetarian hot dogs.</p>
        <button className="slogan-btn">More dddssdsdsdsdsddsdsdsdds Dogs ‘n Make Em Hot</button>
    </div>
)

export default Banner;