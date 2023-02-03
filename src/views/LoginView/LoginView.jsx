import React from 'react'
import { useState, useEffect } from 'react'
import classes from "./LoginView.scss"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';




const LoginView = () => {
  /* const navigate = useNavigate();  */
  // zmienic na typ User
  /* const [user, setUser] = useState();
  const {username, password, confirmPassword} = user; */
  useEffect(() => {
      //update user date using setuser
  })

 
  
  return (
    <div className="login-view">
      <div className='form-container'>
        <form className="login-form" onSubmit>
            <input className="login-input" type="text" defaultValue='e-mail...' required/>
            <input className="login-input" type="text" defaultValue='hasło...'required/>
            <input className="login-submit" type="submit" value="Submit" />
        </form>
        
        <Popup trigger={<p className='password-reset-button'>reset hasła</p>}>
          <div className='pop-up'>

            <form className="reset-password-form" action="">
              <input type="text" value='e-mail...'/>
              <button className='reset-password-button'>resetuj</button>
            </form>
          </div>
        </Popup>
      </div>
      
    </div>
    
  )
}

export default LoginView