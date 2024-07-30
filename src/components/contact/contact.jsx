import React from 'react'
import './contact.css'
const Contact = () => {

        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "8173de9b-0dc9-4c7b-aa7a-a2bf0925cd18");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset()
            
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };
        
  return (
    <div  id='contact' className='contact'>
        <div className="contact-title">
            <h1>Contact Me</h1>
            <span>Get in touch</span>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work o. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <a href=""><i class='bx bxl-gmail'></i></a>
                        <p>punyadande@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <a href=""><i class='bx bxs-phone-call'></i></a>
                        <p>9390797384</p>
                    </div>
                    <div className="contact-detail">
                        <a href=""><i class='bx bx-current-location'></i></a>
                        <p>jammalamadugu</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your Name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your Email' name='Email' />
                <label htmlFor="">Write Your message here...</label>
                <textarea name="message" rows={8} placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
