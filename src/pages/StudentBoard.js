import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/StudentBoard.css'

const StudentBoard = () => {

  return (
    <div className='page student_board-page'>
      <div className='student_board-menu'>
        {/*
          Añadir cuando ya se tenga foto de perfil de usuario
          <img src={"#"} alt='Your account'>Profile</img>
        */}
        <svg className='page-login_icon' xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="m225.3 60.2l-96-32a3.9 3.9 0 0 0-2.6 0l-96 32h-.4l-.4.2h-.2l-.5.4c-.2.1-.3.3-.5.5s-.1.1-.1.2l-.2.4a.4.4 0 0 0-.1.3c-.1.1-.1.3-.2.4v.3a1.7 1.7 0 0 0-.1.7v80a4 4 0 0 0 8 0v-74l43.9 14.6a59.9 59.9 0 0 0 24.4 90.9a91.7 91.7 0 0 0-53.4 38.7a4 4 0 0 0 6.7 4.4a84 84 0 0 1 140.8 0a4.1 4.1 0 0 0 3.4 1.8a3.8 3.8 0 0 0 2.2-.7a4 4 0 0 0 1.1-5.5a91.7 91.7 0 0 0-53.4-38.7a59.9 59.9 0 0 0 24.4-90.9l49.2-16.4a4 4 0 0 0 0-7.6ZM180 120a52 52 0 1 1-92.1-33.1l38.8 12.9l1.3.2l1.3-.2l38.8-12.9A51.7 51.7 0 0 1 180 120Zm-12-41.6l-40 13.4L44.6 64L128 36.2L211.4 64Z"/></svg>
        <Link to={'/student_board'}>Mi espacio</Link>
        <Link to={'/course_catalog'}>Mis cursos</Link>
        <Link to={'/calendario'}>Calendario</Link>
        <Link to={'/wip'}>Ayuda</Link>
        <Link to={'/'}>Cerrar sesión</Link>
      </div>

      <div className='student_board-board'>
        <div className='board-task_container'>
          <p>Noviembre 5 2022</p>
          <div className='board-task'>
            <div className='board-task_course'>
              <Link to={'/wip'}>Álgebra</Link>
            </div>
            <div className='board-task_description'>
              <Link to={'/wip'}>Práctica multiplicaciones</Link>
              <p>Una introducción al curso</p>
            </div>
          </div>
          <div className='board-task'>
            <div className='board-task_course'>
              <Link to={'/wip'}>Geometría</Link>
            </div>
            <div className='board-task_description'>
              <Link to={'/wip'}>Formas Euclídicas</Link>
              <p>Repaso de las formas básicas</p>
            </div>
          </div>
        </div>
        <div className='board-task_container'>
          <p>Noviembre 6 2022</p>
          <div className='board-task_null'>
            <p>Nada por hacer</p>
          </div>
        </div>
        <div className='board-task_container'>
          <p>Noviembre 7 2022</p>
          <div className='board-task_null'>
            <p>Nada por hacer</p>
          </div>
        </div>
        <div className='board-task_container'>
          <p>Noviembre 8 2022</p>
          <div className='board-task_null'>
            <p>Nada por hacer</p>
          </div>
        </div>
        <div className='board-task_container'>
          <p>Noviembre 9 2022</p>
          <div className='board-task'>
            <div className='board-task_course'>
              <Link to={'/wip'}>Álgebra</Link>
            </div>
            <div className='board-task_description'>
              <Link to={'/wip'}>Práctica multiplicaciones #2</Link>
              <p>Continuación de la actividad previa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentBoard;

