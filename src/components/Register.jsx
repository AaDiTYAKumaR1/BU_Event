import React, { useState } from 'react'

import './style.css'
import { Link    } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Register() {

  const [formData, setformData] = useState({
    name: '',
    email:'',
    phone:'',
    event:'',
    roll:'',
    year:'',
  });
  const Changehandle = (e)=>{
  let  name=e.target.name  
   let  value =e.target.value
    setformData({...formData,[name]:value})
  }
    const navigate=useNavigate(); 


    const handleSubmit = async (e) => {
      e.preventDefault();
      const { name, email, phone, roll, year ,event } = formData;
      try {
        const response = await fetch("https://buevent-73686-default-rtdb.firebaseio.com/registerRecords.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            roll,
            event,
            year,
          }),
        });
    
        if (response.ok) {
          alert("Registered successfully");
        } else {
          alert("Failed to Register. Please try again.");
        }
    
        navigate("/register_done");
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      }
    };
    
    return (
    <>
          <section className="reservation" style={{backgroundColor:'#aaaaa1'}}>
      <div className="reservation-container">
        <h2>Register for an Event</h2>
        <form className="reservation-form" onSubmit={handleSubmit} >
          <input type="text" name="name" placeholder="Your Name" required  value={formData.name} onChange={Changehandle}/>
          <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={Changehandle}/>
          <input type="tel" name="phone" placeholder="Phone Number" required  value={formData.phone} onChange={Changehandle}/>
          <input type="number" name="roll" placeholder="Roll no." required value={formData.roll} onChange={Changehandle} />
          <select name="event" required  value={formData.event}  onChange={Changehandle} >
            <option value="" disabled selected>Select Event</option>
            <option value="Gaming Hackathon">Gaming Hackathon</option>
            <option value="Coding Competition">Coding Competition</option>
            <option value="Guest Lecture Series">Guest Lecture Series</option>
          </select>
          <select name="year" required  value={formData.year}  onChange={Changehandle} >
            <option value="Ist year" disabled selected>Select year</option>
            <option value="">Ist year</option>
            <option value="Second year">Second year</option>
            <option value="Third yar">Third year</option>
            <option value="Fourth year">Fouth year</option>
          </select>
         
          {/* <input type="number" name="year" placeholder="Year" required value={formData.year} onChange={Changehandle}/> */}
         <button type="submit" >Register</button>
        </form>
      </div>
    </section>
    </>
    )
}

 export default Register