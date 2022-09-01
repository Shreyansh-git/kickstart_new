import React from 'react'
// import UserList from './UserList';
import './HomePage.css'
import { useNavigate } from 'react-router-dom';



function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <header className='mainheading'><strong>Welcome to the Homepage</strong></header>
      <div className='container'>
        <button className='btn-1' onClick={loginPage}>Login</button>
        <button className='btn-1' onClick={registerPage}>Register</button>
      </div>
    </div>
  )
  function loginPage(){
    navigate("/login")
  }
  function registerPage(){
    navigate("register")
  }
}

export default HomePage