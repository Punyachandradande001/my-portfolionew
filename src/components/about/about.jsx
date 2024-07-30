import React from 'react'
import './about.css'
import my_pic from '../../assets/my_pic1.jpg'
const about = () => {
  
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About <span>Me</span></h1>
      </div>
      <div className="about-sections">
      <div className="about-left">
       <img src={my_pic} alt="" />
       </div>
       <div className="about-right">
        <div className="about-p">
            <p>I am punyachandra  I have graduated in the 2023 in computer applications and information technology.After completion of my education I got trained in python full stack web development course.</p>
            <p>So since I am a fresher  I have no exprience but  because of my certification  I can manage the things in organisation so  I am easily adaptable to any environment.</p>
        </div>
        <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>React  Js</p><hr style={{width:"65%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Python</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>Django</p><hr style={{width:"68%"}}/></div>
            <div className="about-skill"><p>Sql</p><hr style={{width:"50%"}}/></div>
        </div>
       </div>
      </div>
      <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEAR OF INTERNSHIPS EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>

  )
}

export default about
