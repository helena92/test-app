import React from 'react';
import shadow from '../assets/images/Overlay - Gradients.png'
import instaPhoto from '../assets/images/Instagram.png'
import photo1 from '../assets/images/photo 1.jpg'
import photo2 from '../assets/images/photo 2.jpg'
import photo3 from '../assets/images/photo 3.jpg'
import photo4 from '../assets/images/photo 4.jpg'
import photo5 from '../assets/images/photo 5.jpg'
import photo6 from '../assets/images/photo 6.jpg'
import photo7 from '../assets/images/photo 7.jpg'
import photo8 from '../assets/images/photo 8.jpg'
import photo9 from '../assets/images/photo 9.jpg'
import photo10 from '../assets/images/photo 10.jpg'
import photo11 from '../assets/images/photo 11.jpg'
import photo12 from '../assets/images/photo 12.jpg'


const Header = () => (
    <header>
        <div className="shadow">
            <img src={shadow} alt=""/>
        </div>
        <div className="header-images-flex">
            <div className="header-images-container">
                <img src={photo1} alt=""/>
            </div>
            <div className="header-images-container">
                <img src={photo2} alt=""/>
            </div>
            <div className="header-images-container">
                <img src={photo3} alt=""/>
            </div>
            <div className="header-images-container">
                <img src={photo4}alt="" />
            </div>
            <div className="header-images-container">
                <img src={photo5} alt=""/>
            </div>
            <div className="header-images-insta">
                <div className="insta-block">
                    <img src={instaPhoto} alt=""/>
                    <div className="insta-sign">#hotdogs</div>
                </div>
                <img src={photo6} alt=""/>
            </div>
        </div>
        <div className="header-images-flex">
            <div className="header-images-container">
                <img src={photo7} alt=""/>
            </div>
            <div className="header-images-container">
                <img src={photo8} alt=""/>
            </div>
            <div className="header-images-container">
                <img src={photo9} alt=""/>
            </div>
            <div className="header-images-container">
                <img src={photo10} alt=""/>
            </div>
            <div className="header-images-container">
                <img src={photo11} alt=""/>
            </div>
            <div className="header-images-container">
                <img src={photo12} alt=""/>
            </div>
        </div>
    </header>
)

export default Header;