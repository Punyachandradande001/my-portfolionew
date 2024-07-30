import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/bx-menu-alt-right.svg'
import menu_close from '../../assets/bx-comment-x.svg'
const Navbar = () => {
  const menuRef = useRef();
  const openmenu =()=>{
    menuRef.current.style.right="0";
  }
  const closemenu =()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openmenu} alt=""  className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closemenu} alt=""  className='nav-mob-close'/>
        <li><AnchorLink className='achor-link' offset={50} href='#home'><p>Home</p></AnchorLink></li>
        <li><AnchorLink className='achor-link' offset={50} href='#about'><p>About Me</p></AnchorLink></li>
        <li><AnchorLink className='achor-link' offset={50} href='#services'><p>Services</p></AnchorLink></li>
        <li><AnchorLink className='achor-link' offset={50} href='#myportfolio'><p>Portfolio</p></AnchorLink></li>
        <li><AnchorLink className='achor-link' offset={50} href='#contact'><p>contact</p></AnchorLink></li>
      </ul>
      <div className="nav-connect"><AnchorLink className='achor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div> 
  )
}

export default Navbar
