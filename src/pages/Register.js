import React from 'react'
import { useNavigate } from "react-router-dom";

import '../styles/Register.css'

const Register = () => {

    let navigate = useNavigate();

    return (
      <div className='page register-page'>
        <h1>Register student</h1>

        <div id="register-sign_up">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" placeholder="John"/>
          </div>
          <div>
            <label htmlFor="name">Surname:</label>
            <input type="text" className="form-control" placeholder="Doe"/>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" placeholder="johndoe@mail.com"/>
          </div>
          <div>
            <label htmlFor="date">Birthdate:</label>
            <input type="date" id="birthday" className="form-control" name="birthday"/> 
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" className="form-control" placeholder="johnDoe"/>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-control" placeholder="Password"/>
          </div>
        </div>

        <div className="register-submit_box">
          <input type="submit" value="Return to Home" onClick={ () => { navigate('/') }}/>
          <input type="submit" value="Register" onClick={ () => { navigate('/wip') }}/>
        </div>
      </div>
    );
}

export default Register;
