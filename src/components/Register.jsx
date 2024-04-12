import React from 'react'
import './style.css'
import { Link    } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Register() {
  const navigate=useNavigate(); 
  const handleSubmit=()=>{
  //  e.preventDefault ();
    navigate("/register_done");
  }
  
    return (
    <>
          <section className="reservation" style={{backgroundColor:'#aaaaa1'}}>
      <div className="reservation-container">
        <h2>Register for an Event</h2>
        <form className="reservation-form" onSubmit={handleSubmit} >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <select name="event" required>
            <option value="" disabled selected>Select Event</option>
            <option value="Gaming Hackathon">Gaming Hackathon</option>
            <option value="Coding Competition">Coding Competition</option>
            <option value="Guest Lecture Series">Guest Lecture Series</option>
          </select>
          <input type="date" name="date" required />
          <input type="time" name="time" required />
          <textarea name="message" placeholder="Additional Message" rows="5"></textarea>
         <button type="submit" >Register</button>
        </form>
      </div>
    </section>
    </>
    )
}

 export default Register