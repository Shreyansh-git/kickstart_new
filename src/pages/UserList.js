import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import "./UserList.css"
import './HomePage.css'
// import { Link } from 'react-router-dom'

function UserList() {
  const navigate = useNavigate()

  const [users, setUsers] = useState([])
  const fetchUsers = async () => {
    const res = await fetch("https://reqres.in/api/users/?per_page=20");
    const json = await res.json();
    console.log(json.data);
    setUsers(json.data);
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  function singleUserDetail(userId) {
    navigate(`/userprofile/${userId}`)

    console.log(userId);
  }
  function logOut() {
    localStorage.removeItem("userToken");
    navigate('/login')

  }

  return (
    <div className="home">
      <header className='heading'>LIST OF ALL THE USERS <button className='btn-2' onClick={logOut}>Logout</button></header>
      <div className="userlist">
        {users.length > 0 &&
          users.map((user) => {
            return (
              <div className='user-list-item' key={user.id} onClick={() => singleUserDetail(user.id)} >
                <p> {user.id}] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>{user.first_name}</strong></p>
                <img src={user.avatar} alt="User" />
              </div>

            );
          })}
      </div>
    </div>
  );
}

export default UserList

// className :hover