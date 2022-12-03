import React from 'react'
import { useNavigate } from "react-router-dom";

import '../styles/Login.css'

const Login = () => {

  let navigate = useNavigate();

  return (
    <div className='page login-page'>
      <h1>Iniciar sesión</h1>

      <div className="login-login">
        <div>
          <label htmlFor="username">Usuario:</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre de usuario"/>
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" className="form-control" placeholder="Contraseña"/>
        </div>
      </div>

      <div className='login-submit_box'>
        <button className='login_bubble' type="submit" value="Entrar" onClick={ () => { navigate('/student_board') }}>
          Ingresar
        </button>
      </div>

      <p>¿No tienes una cuenta aún? <a href={'/register'}>Regístrate</a></p>
    </div>
  );
};

export default Login;

