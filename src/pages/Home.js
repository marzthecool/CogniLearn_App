import React from 'react';
import { useNavigate } from "react-router-dom";

import '../styles/Home.css'

const Home = () => {

  let navigate = useNavigate();

  return (
    <div className='page home-page'>
      <div className='home-section'>
        <h3>Inicia sesión</h3>
      </div>

      <div className='home-section home-login'>
        <button className='home-login_bubble' onClick={ () => { navigate('/student_login') }}>
          <div id='studentLogin'>
            <svg className='home-login_icon' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="m225.3 60.2l-96-32a3.9 3.9 0 0 0-2.6 0l-96 32h-.4l-.4.2h-.2l-.5.4c-.2.1-.3.3-.5.5s-.1.1-.1.2l-.2.4a.4.4 0 0 0-.1.3c-.1.1-.1.3-.2.4v.3a1.7 1.7 0 0 0-.1.7v80a4 4 0 0 0 8 0v-74l43.9 14.6a59.9 59.9 0 0 0 24.4 90.9a91.7 91.7 0 0 0-53.4 38.7a4 4 0 0 0 6.7 4.4a84 84 0 0 1 140.8 0a4.1 4.1 0 0 0 3.4 1.8a3.8 3.8 0 0 0 2.2-.7a4 4 0 0 0 1.1-5.5a91.7 91.7 0 0 0-53.4-38.7a59.9 59.9 0 0 0 24.4-90.9l49.2-16.4a4 4 0 0 0 0-7.6ZM180 120a52 52 0 1 1-92.1-33.1l38.8 12.9l1.3.2l1.3-.2l38.8-12.9A51.7 51.7 0 0 1 180 120Zm-12-41.6l-40 13.4L44.6 64L128 36.2L211.4 64Z"/></svg>
            Estudiante
          </div>
        </button>
        <button className='home-login_bubble' onClick={ () => { navigate('/general_login') }}>
          <div id='teacherLogin'>
            <svg className='home-login_icon' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h13.4a4.1 4.1 0 0 0 3.6-2.3a52 52 0 0 1 94 0a4.1 4.1 0 0 0 3.6 2.3H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12Zm4 156a4 4 0 0 1-4 4h-58.9a60.4 60.4 0 0 0-34.7-29.1a36 36 0 1 0-36.8 0A60.4 60.4 0 0 0 50.9 204H40a4.1 4.1 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-116-28a28 28 0 1 1 28-28a28.1 28.1 0 0 1-28 28Zm92-92v96a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h12V84H68v12a4 4 0 0 1-8 0V80a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4Z"/></svg>
            Profesor
          </div>
        </button>
      </div>

      <div className='home-section home-login_button'>
        ¿No tienes una cuenta? 
        <a id='register' className='home-login_register' href={'/register'}> Regístrate</a>.
      </div>

      <div className='home-section home-login_socials'>
        <nav>
          <ul>
            <li>
              <a className='home-login_facebook' href={'https://facebook.com'}>
                <svg className='home-login_social_icon' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M228 128a100 100 0 1 0-100 100a100.2 100.2 0 0 0 100-100Zm-96 91.9V148h28a4 4 0 0 0 0-8h-28v-28a20.1 20.1 0 0 1 20-20h16a4 4 0 0 0 0-8h-16a28.1 28.1 0 0 0-28 28v28H96a4 4 0 0 0 0 8h28v71.9a92 92 0 1 1 8 0Z"/></svg>
              </a>
            </li>
            <li>
              <a className='home-login_twitter' href={'https://twitter.com'}>
                <svg className='home-login_social_icon' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M243.7 70.5A4 4 0 0 0 240 68h-32.8a44 44 0 0 0-38.6-24A44.4 44.4 0 0 0 124 88v11.2c-44.1-9.4-80.8-45.7-81.2-46a3.9 3.9 0 0 0-6.7 2.1c-8.6 46.8 5.4 78.1 18.7 96.1a101.8 101.8 0 0 0 27.4 25.8c-15.7 20.4-43.3 30.9-43.6 31.1a4 4 0 0 0-2.4 2.5a3.8 3.8 0 0 0 .5 3.4c.2.4 2.8 4 9.5 7.4c8.5 4.2 19.9 6.4 33.8 6.4c68.9 0 126.5-53.5 131.6-122l31.2-31.2a3.8 3.8 0 0 0 .9-4.3Zm-38.8 30.9a4.2 4.2 0 0 0-1.2 2.6c-4.1 65.1-58.5 116-123.7 116c-17.8 0-27.6-3.9-32.5-6.9c10.4-4.8 31.5-16.3 43.8-34.9a3.7 3.7 0 0 0 .6-3.2a4.2 4.2 0 0 0-2.1-2.6c-.2-.1-15.3-7.8-28.6-25.8C44.6 124 38.4 96.3 42.8 64c12.8 11.3 45.8 37.5 84.5 43.9a4.2 4.2 0 0 0 3.3-.8a4.1 4.1 0 0 0 1.4-3.1V88a36.4 36.4 0 0 1 36.5-36A36.1 36.1 0 0 1 201 73.6a3.9 3.9 0 0 0 3.7 2.4h25.6Z"/></svg>
              </a>
            </li>
            <li>
              <a className='home-login_youtube' href={'https://youtube.com'}>
                <svg className='home-login_social_icon' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="m162.2 124.7l-48-32a4 4 0 0 0-4.1-.2A3.9 3.9 0 0 0 108 96v64a3.9 3.9 0 0 0 2.1 3.5a4.5 4.5 0 0 0 1.9.5a3.6 3.6 0 0 0 2.2-.7l48-32a3.9 3.9 0 0 0 0-6.6ZM116 152.5v-49l36.8 24.5Zm114.5-81.7a20.4 20.4 0 0 0-12.1-13.6c-33.8-13-88.1-12.8-90.4-12.8s-56.6-.2-90.4 12.8a20.4 20.4 0 0 0-12.1 13.6C23 80.5 20 98.3 20 128s3 47.5 5.5 57.2a20.4 20.4 0 0 0 12.1 13.6c33.8 13 88.1 12.8 90.4 12.8h.7c6.9 0 57.6-.4 89.7-12.8a20.4 20.4 0 0 0 12.1-13.6c2.5-9.7 5.5-27.5 5.5-57.2s-3-47.5-5.5-57.2Zm-7.8 112.4a12 12 0 0 1-7.2 8.1c-32.4 12.5-86.9 12.3-87.5 12.3s-55.1.2-87.5-12.3a12 12 0 0 1-7.2-8.1c-2.4-9.3-5.3-26.4-5.3-55.2s2.9-45.9 5.3-55.2a12 12 0 0 1 7.2-8.1c32.4-12.5 86.9-12.3 87.5-12.3s55.1-.2 87.5 12.3a12 12 0 0 1 7.2 8.1c2.4 9.3 5.3 26.4 5.3 55.2s-2.9 45.9-5.3 55.2Z"/></svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
