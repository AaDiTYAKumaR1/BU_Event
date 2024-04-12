import React from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom'
function Login() {
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate("/");
  }
  return (
    <>

   <div  className='container_login' >
      <div className="wrapper">
        <form action="" onSubmit={handleSubmit} >
          <h1>Student Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember Me</label>
            <a href="/">Forgot Password</a>
          </div>
          <button type="submit" className="btn" >Login</button>
          <div className="register-link">
            <p>Don't have an account? <Link to="/registration">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login