import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                    <img src={assets.logo} alt=""/>
                    <p>FriendlyFeast is a user-frindly website to provide quality and quantity food service to the Customers </p>
                    <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                    </div>
            </div>
          
            <div className="footer-content-center">
                <h2>Friendly Feast</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                   <h2>Get In Touch</h2>
                   <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@friendlyfeast.com</li>
                   </ul>
            </div>
        </div>
        <hr/>
        <p className="footercopy-right">Copyright 2024 @ FriendlyFeast.com - All Right Reserved.</p>
      
    </div>
  )
}

export default Footer
