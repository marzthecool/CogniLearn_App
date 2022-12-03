import React from 'react'
import { useNavigate } from "react-router-dom";

import '../styles/Register.css'

const Register = () => {

    let navigate = useNavigate();

    return (
      <>
        <div class='container'>
          <div class='row page-light'>
              <h1>Crear cuenta</h1>
            <div class='row register-form'>
              <div class='col'>
                <label for="name" class="form-label">Nombre(s)</label>
                <input type='text' class='form-control' placeholder='Nombre(s)' aria-label='Nombre(s)'/>
              </div>
              <div class='col'>
                <label for="name" class="form-label">Apellidos:</label>
                <input type='text' class='form-control' placeholder='Apellidos' aria-label='Apellidos'/>
              </div>
            </div>
            <div class='register-form'>
              <label htmlFor="email" class="form-label">Correo electrónico:</label>
              <input type="email" className="form-control" placeholder="correo@mail.com" aria-label="correo@mail.com"/>
            </div>
            <div class='register-form'>
              <label htmlFor="date" class="form-label">Fecha de nacimiento:</label>
              <input type="date" id="birthday" className="form-control" name="birthday"/> 
            </div>
            <div class='register-form'>
              <label htmlFor="username" class="form-label">Usuario:</label>
              <div class="input-group">
                <div class="input-group-text">@</div>
                <input type="text" class="form-control" id="name" placeholder="Nombre de usuario"/>
              </div>
            </div>
            <div class='register-form'>
              <label htmlFor="password" class="form-label">Contraseña:</label>
              <input type="password" className="form-control" placeholder="Contraseña"  aria-label="Contraseña"/>
            </div>
            <div class='row d-flex justify-content-center'>
              <button className='register_bubble' type="submit" value="Entrar" onClick={ () => { navigate('/student_board') }}>
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Register;
