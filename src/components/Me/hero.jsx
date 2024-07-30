import React from 'react'
 import './hero.css'
 import profile_img from '../../assets/profile.jpg'
 import AnchorLink from 'react-anchor-link-smooth-scroll'
const hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Punyachandra Dande,</span>frontend developer based in INDIA.</h1>
      <p>I am a fresher no exprenace I seek challenging opportunities where I can fully
        use my skills for the success of the organization. To secure a challenging
        position in a reputable organization where I can apply my knowledge and skillset
        whichwould enable me as a professional to grow while fulfilling organizational
        goals</p>
        <div className="icons">
          <a href=""><i class='bx bx-wifi'></i></a>
          <a href=""><i class='bx bxl-github'></i></a>
          <a href=""><i class='bx bxl-instagram-alt'></i></a>
          <a href=""><i class='bx bxl-whatsapp'></i></a>
        </div>
        <div className="hero-action">
            <div className="my-connect"><AnchorLink className='achor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="my-resume">My Resume</div>
        </div>
    </div>
  )
}

export default hero
