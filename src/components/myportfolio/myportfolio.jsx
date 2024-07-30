import React from 'react'
import './myportfolio.css'
import portfolio_img from '../../assets/blog-2.jpg'
import portfolio_img1 from '../../assets/blog-3.jpg'
import portfolio_img2 from '../../assets/blog-4.jpg'
import portfolio_img3 from '../../assets/blog-5.jpg'
import portfolio_img4 from '../../assets/blog-6.jpg'
import portfolio_img5 from '../../assets/blog-7.jpg'
const myportfolio = () => {
  return (
    <div id='myportfolio' className='myportfolo'>
        <div className="myportfolio-title">
            <h1>Portfolio</h1>
            <span>My latest work</span>
        </div>
        <div className="myportfolio-container">
            <div className="portfolio-img">
                <img src={portfolio_img} alt="" />
            </div>
            <div className="portfolio-img">
                <img src={portfolio_img1} alt="" />
            </div>
            <div className="portfolio-img">
                <img src={portfolio_img2} alt="" />
            </div>
            <div className="portfolio-img">
                <img src={portfolio_img3} alt="" />
            </div>
            <div className="portfolio-img">
                <img src={portfolio_img4} alt="" />
            </div>
            <div className="portfolio-img">
                <img src={portfolio_img5} alt="" />
            </div>
        </div>
    </div>
  )
}

export default myportfolio
