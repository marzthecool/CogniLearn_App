import React from 'react'
import { useNavigate } from "react-router-dom";

import '../styles/Login.css'

const Login = () => {

  let navigate = useNavigate();

  return (
    <div className='page login-page'>
      <h1>General Login</h1>

      <div className="login-login">
        <div>
          <label htmlFor="username">Username:</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="JohnDoe"/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" placeholder="Password"/>
        </div>
      </div>

      <div className='login-submit_box'>
        <input type="submit" value="Return to Home" onClick={ () => { navigate('/') }}/>
        <input type="submit" value="Access" onClick={ () => { navigate('/wip') }}/>
      </div>
    </div>
  );
};

export default Login;
