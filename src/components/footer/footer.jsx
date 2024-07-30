import React from 'react'
import './footer.css'
const footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <p>I am a frontend developer from ,INDIA with 1 year internships of experince in training course and virual class in AK technology.</p>
            </div>
            <div className="footer-top-right">
              <div className="footer-email-input">
                <a href=""><i class='bx bxs-user'></i></a>
                <input type="email" placeholder='Enter your email' />
              </div>
              <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">2024 Punyachandra Dande. All right reserved.</p>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
    </div>
  )
}

export default footer
