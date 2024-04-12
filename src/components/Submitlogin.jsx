import React from 'react'
import RegisterImg from './../../public/Register.jpg';
function Submitlogin() {
  return (
    <div style={{minHeight:'800px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',backgroundColor:"whitesmoke"}}>
    <h1 style={{height:'100px',fontFamily:'cursive',fontSize:'44px'}}>Registered successfully</h1>
   <div style={{minHeight:'500px'}}>
   <img src={RegisterImg}  height='500px' alt='no-image'  />
   </div>
   
</div>
  )
}

export default Submitlogin