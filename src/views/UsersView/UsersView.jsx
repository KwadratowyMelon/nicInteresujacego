import React from 'react'
import { useState, useEffect } from 'react'
import BannerView from '../BannerView/BannerView'
import classes from './UsersView.scss'

const UsersView = () => {

  const [Login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);


  const users = [
    {
      id: 1,
      date: 2000,
      author: "bob budowniczy",
    },
    {
      id: 2,
      date: 2000,
      author: "kot filemon",
    },
    {
      id: 3,
      date: 2000,
      author: "bob budowniczy",
    },
    {
      id: 4,
      date: 2000,
      author: "kot filemon",
    },
    {
      id: 5,
      date: 2000,
      author: "bob budowniczy",
    },
    {
      id: 6,
      date: 2000,
      author: "bob budowniczy",
    },
    {
      id: 7,
      date: 2000,
      author: "bob budowniczy",
    },
  ]

  return (
    <div className="users-view">
      <BannerView/>
      <div className="users-list">
        {users.map(user => {
          return(
            <div key={user.id} className="user-container">
              <div className='user-info'>
                  <p>{user.author}</p>
                  <p>{user.date}</p>
                  <p className="delete-user">Usuń</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="registration-form">
        <form action="">
          <label>Login</label>
          <input type="text" onChange={e => setLogin(e.target.value, console.log(Login))}/>
          <label>Hasło</label>
          <input type="text" onChange={e => setEmail(e.target.value)}/>
          <div className="admin-check">
            <label>Admin</label>
            <input type="checkbox" name="" id="" onChange={e => setIsAdmin(current => !current)}/>
          </div>
          <button>Zarejestruj</button>
        </form>
      </div>
    </div>
  )
}

export default UsersView