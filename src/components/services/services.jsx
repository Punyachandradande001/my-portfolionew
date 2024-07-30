import React from 'react'
import './services.css'
const Services = () => {
  return (
    <div id='services'>
        <div className="container">
            <h1 className='sub-title'>My Services</h1>
            <div className="services-list">
                <div>
                <i class='bx bxs-crop'></i>
                   <h2>UI/UX Design</h2>
                   <p>UI designers work on individual pages, buttons, and interactions; making sure they are polished and functional. UX designers take a more high-level view of a product or service, ensuring the collective user flow of a site, service, or app is fully realized and consistent.</p>
                   <a href="#">learn more <i class='bx bxs-chevrons-right'></i></a>
                </div> 
                <div>
                <i class='bx bx-font-color'></i>
                   <h2>App Design</h2>
                   <p>app designer is an individual who designs the User Experience, and the User Interface an application. An App Developer, on the other hand, actually builds the User Interface, and the User Experience. They are both pivotal to ensuring you have a great mobile experience for your customers.</p>
                   <a href="#">learn more <i class='bx bxs-chevrons-right'></i></a>
                </div>
                <div>
                <i class='bx bx-code-alt'></i>
                   <h2>Frontend development</h2>
                   <p>A front-end developer architects and develops websites and applications using web technologies (i.e., HTML, CSS, DOM, and JavaScript), which run on the Open Web Platform or act as compilation input for non-web platform environments (i.e.,React Native).</p>
                   <a href="#">learn more <i class='bx bxs-chevrons-right'></i></a>
                </div> 
                <div>
                <i class='bx bxl-wordpress'></i>
                   <h2>Backend Development</h2>
                   <p>Backend developers build code that allows a database and an application to communicate with one another. Backend developers take care and maintain the back-end of a website, Including databases, servers, and apps, and they control what you don't see.</p>
                   <a href="#">learn more <i class='bx bxs-chevrons-right'></i></a>
                </div> 
                <div>
                <i class='bx bxl-sketch'></i>
                   <h2>Web design</h2>
                   <p>A web designer is responsible for creating the design and layout of a website or web pages. Unlike web developers, who specialise in creating new websites' structures and the code that forms these, web designers tend to focus on the visual aspects of a site, such as its layout and its usability.</p>
                   <a href="#">learn more <i class='bx bxs-chevrons-right'></i></a>
                </div> 
                <div>
                <i class='bx bxl-meta'></i>
                   <h2>Social media</h2>
                   <p>Social media refers to the means of interactions among people in which they create, share, and/or exchange information and ideas in virtual communities and networks. The Office of Communications and Marketing manages the main Facebook, X/Twitter, Instagram, LinkedIn, and YouTube accounts.</p>
                   <a href="#">learn more <i class='bx bxs-chevrons-right'></i></a>
                </div> 
            </div>
        </div>
       
    </div>
  )
}

export default Services
