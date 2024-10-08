import React from 'react'
import './style.css'
import {Link} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// import {logo} from '../../public/iconlogo.png'
function Navbars() {
  // const {logout} = useAuth0();
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
      <li>< Link to="/Contact">Contact Us</Link></li>
      <li><Link to="/aboutus">About Us</Link></li>
      
       

        {/* <button style={{border:'none',color:'white',backfaceVisibility:'hidden',marginRight:'48px',backgroundColor:'red',padding:"14px 20px",border:'2px',borderRadius:'12px',fontWeight:'bold'}} >logout</button>
        */}
      
		</ul>
	  </nav>
	</header>
    </>
  )
}

export default Navbars