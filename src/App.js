import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home'
import Landing from './pages/Landing'
import Register from './pages/Register'
import GeneralLogin from './pages/GeneralLogin.js'
import StudentLogin from './pages/StudentLogin.js'
import StudentBoard from './pages/StudentBoard.js'
import WIP from './pages/WIP.js'
import CourseCatalog from './pages/CourseCatalog.js'
import Course from './pages/Course.js'
import PerfilEstudiante from './pages/PerfilEstudiante.js';
import PerfilMaestro from './pages/PerfilMaestro.js';
import ExercisePage from './pages/ExercisePage';
import AlgebraExercise from './pages/AlgebraExercise.js';
import MediaExercise from './pages/MediaExercise.js';
import Calendario from './pages/Calendario';

import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/register" element={<Register />}/>
          <Route exact path="/general_login" element={<GeneralLogin />}/>
          <Route exact path="/student_login" element={<StudentLogin />}/>
          <Route exact path="/wip" element={<WIP />}/>
          <Route exact path="/student_board" element={<StudentBoard />}/>
          <Route exact path="/course_catalog" element={<CourseCatalog />}/>
          <Route exact path="/course" element={<Course />}/>
          <Route exact path="/perfil-estudiante" element={<PerfilEstudiante/>}/>
          <Route exact path="/perfil-maestro" element={<PerfilMaestro/>}/>
          <Route exact path="/landing" element={<Landing/>}/>
          <Route exact path="/exercise_page" element={<ExercisePage/>}/>
          <Route exact path="/algebra_exercise" element={<AlgebraExercise/>}/>
          <Route exact path="/media_exercise" element={<MediaExercise/>}/>
          <Route exact path="/calendario" element={<Calendario/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
