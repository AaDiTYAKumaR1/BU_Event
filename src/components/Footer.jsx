import React from 'react'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import { faFacebook, faWhatsapp, faInstagram, faLinkedin, faTwitter  } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <>
      {/* <footer class="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <img src="iconlogo.png" alt="Logo"/>
      </div>
      <nav className="footer-links">
        <Link to="/">Home</Link>
        <Link to ="/aboutus">About</Link>
        <Link to="/Clubs">clubs</Link>
        <a href="/Upcoming">events</a>
        <Link to="/Contact">Contact</Link>
      </nav>
      <div className="footer-social" style={{gap:'15px',display:'flex',marginTop:'16px'}} >
      <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '8px' }} />
      <FontAwesomeIcon icon={faTwitter} style={{ marginRight: '8px' }} />
        <FontAwesomeIcon icon={faWhatsapp}  style={{ marginRight: '8px' }}/>
        <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '8px' }}/>
        <FontAwesomeIcon icon={faInstagram}style={{ marginRight: '8px' }}   />
      </div>
      <div style={{backgroundColor:'wheat',height:'300px',width:'250px'}}> </div>
    </div>
    <p className="footer-text">&copy; 2024 Events@BU. All rights reserved.</p>
    
  </footer> */}
      <footer className="footer" >
        <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <div></div>
          <div></div>
          <div>
            <div className="footer-logo">
              <img src="iconlogo.png" alt="Logo" />
            </div>
            <nav className="footer-links" style={{marginTop:'20px'}}>
              <Link to="/">Home</Link>
              <Link to="/aboutus">About</Link>
              <Link to="/Clubs">clubs</Link>
              <a href="/Upcoming">events</a>
              {/* <a href="#">Gallery</a> */}
              <Link to="/Contact">Contact</Link>
            </nav>
           
            <p className="footer-text" style={{marginTop:'20px'}}>&copy; 2024 Events@BU. All rights reserved.</p>
          </div>

          <div style={{ backgroundColor: '#ccc', height: '300px', width: '300px', marginTop: '14px',borderRadius:'12px',color:'voilet'}}>
            <h4 style={{marginTop:'16px',color:'black '}}>NEWSLETTER</h4>
            <p style={{color:'black'}} >Sign up your mailing list to get
              lastest Updates and offices.
            </p>
           <form action="">
           <input type="email"  style={{paddingTop:'6px' , paddingBottom:'6px',paddingLeft:'6px' }}  required />
           <button  type='Submit' style={{height:'38px',width:'34px'}} ><FontAwesomeIcon icon={faArrowRight} /> </button>
           </form>
           <h2 style={{paddingTop:'24px',color:'black'}} >FOLLOW US ON</h2>
           <div className="footer-social" style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px',color:'black' }}>
              <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '8px' }} />
              <FontAwesomeIcon icon={faTwitter} style={{ marginRight: '8px' }} />
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '8px' }} />
              <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '8px' }} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>




      </footer>
    </>
  )
}

export default Footer