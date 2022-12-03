import React from 'react';
import { useNavigate } from "react-router-dom";

import '../styles/WIP.css'

const WIP = () => {

  let navigate = useNavigate();

  return (
    <div className='page wip-page'>
      <div className='wip-section'>
        <h1>¡Trabajo en proceso!</h1>
      </div>
      <div className='wip-section'>
        <svg className='wip-icon' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z"><animateTransform attributeName="transform" attributeType="XML" dur="10s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"/></path></svg>
      </div>

      
      <button className='login_bubble' type="submit" value="Entrar" onClick={ () => { navigate('/') }}>
            Regresar a inicio
        </button>
    </div>
  );
};

export default WIP;
