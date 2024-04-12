import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
// import {logo} from '../../public/iconlogo.png'
function Navbars() {
  return (
    <>
    <header style={{zIndex:'5'}}>
	   <div className="logo" >
		 <img src="iconlogo.png" alt="Berger Hut Logo" style={{}} /> 
	 </div>  
	  <nav>
		<ul >
      <li><Link  to="/">Home</Link></li>
      <li>< Link to="/Clubs">Clubs</Link></li>
      {/* <li><a href="/">Events</a></li> */}
      {/* <li><a href="#gallery">Gallery</a></li> */}
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/aboutus">About Us</Link></li>
      <li>< Link to="/Contact">Contact Us</Link></li>
      
		</ul>
	  </nav>
	</header>
    </>
  )
}

export default Navbars