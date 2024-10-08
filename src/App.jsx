import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Headers from './components/Navbars'
import Homepage from './components/Homepage'
import Register from './components/Register'
import Login from './components/Login'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
import Clubs from './components/Clubs'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nopage from './components/Nopage'
import Layout from './components/Layout'
import AboutUs from './components/AboutUs'
import Event from './components/Event'
import UpcomingEvents from './components/UpcomingEvent'
import Evcountdown from './components/Evcountdown'
import SubmitRegister from './components/SubmitRegister'
import Submitlogin from './components/Submitlogin';
import { useAuth0  } from '@auth0/auth0-react'
// import {authimg} from './../public/authlogin.jpg'
function App() {
  const {user ,loginWithRedirect } =useAuth0();
  return (
    <>
     {/* { !user &&
     <div style={{height:'100vh',backgroundImage:"url(authlogin.jpg)",width:'100vw',backgroundRepeat:'no-repeat',backgroundSize:'cover',
     display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'48px'
     
     }}>
          <h1 style={{fontWeight:'bold',fontFamily:'cursive'}} >Welcome to @BU Event</h1>
        <button onClick={(e)=>loginWithRedirect()} style={{padding:'16px 56px',fontWeight:'bolder',fontSize:'24px',borderRadius:'16px'
      
      }}> login</button>
     </div>
     } */}
     
       <BrowserRouter>
    <Layout>
    <Routes>
      <Route path='/' exact element={<Homepage/>} />
      <Route path='/Contact' element={<Contactus/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Registration' element={<Register/>} />
      <Route path='/' element={<Nopage/>} />
      <Route path='/Login_done' element={<Submitlogin/>} />
      <Route path='/register_done' element={<SubmitRegister/>} />
      <Route path='/Clubs' element={<Clubs/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/Upcoming' element={<UpcomingEvents/>}/>

    </Routes>
    </Layout>
    </BrowserRouter>  
       
 
     {/* <SubmitRegister/> */}
     
    
    </>
  )
}

export default App
