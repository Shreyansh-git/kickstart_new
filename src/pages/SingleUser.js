import React from 'react'
import { useState, useEffect } from 'react'
import "./SingleUser.css"
import "./HomePage.css"
import { useNavigate } from 'react-router-dom'


function SingleUser() {
  const navigate = useNavigate();
  const [singleUser, setSingleUser] = useState([])
  const idValue = window.location.pathname.split("/")[2];


  const fetchUsers = async () => {
    const res = await fetch(`https://reqres.in/api/users/${idValue}`);
    const json = await res.json();
    console.log(json.data);
    setSingleUser(json.data);

  }
  // fetchUsers();
  useEffect(() => {
    fetchUsers();
  }, []);

  function logOut() {
    localStorage.removeItem("userToken");
    navigate('/login')
  }
  return (
    <div className="home-3">
      <button className='btn-3' onClick={logOut}>Logout</button>
      <div className='user-name'>
        <p><strong>{singleUser.first_name} {singleUser.last_name}</strong></p>
      </div>
      <div className='user-list-image'>
        <img src={singleUser.avatar} alt="User" />
      </div>
      <p className='emails'>{singleUser.email}</p>
    </div>
  );
}

export default SingleUser