import React from 'react';
import { useNavigate } from "react-router-dom";

const Course = () => {
    const navigate = useNavigate();
    const course = {
        id: 1,
        title: "Introduction to Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        professor: "John Doe",
        rating: 4.8,
        numReviews: 392,
        numThumbsUp: 97,
        numStudents: 564,
        numLessons: 10,
        views: 874,
        skills: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"],
        lessons: [
            {
                id: 1,
                title: "Tema",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                duration: "1:30 hrs",
            },
            {
                id: 2,
                title: "Tema",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                duration: "2:30 hrs",
            },
            {
                id: 3,
                title: "Tema",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                duration: "1:30 hrs",
            },
            {
                id: 4,
                title: "Tema",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                duration: "2:30 hrs",
            }
        ]
    }

    return (
        <>
            <div class="container">
                <div class="row page-dark">
                    <div class="col">
                        <div class="nav-links"> 
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a onClick={ () => { navigate('/course_catalog')} } >Cursos</a></li>
                                    <li class="breadcrumb-item"><a onClick={ () => { navigate('/course_catalog')} } >Tema</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Subtema</li>
                                </ol>
                            </nav>
                        </div>

                        <div class="course-title">
                            <h1>{course.title}</h1>

                            <div class="course-rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                                <p>{course.rating}</p>
                                <p>{course.numReviews} calificaciones</p>
                                <p> | </p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 512 512"><title>ionicons-v5-k</title><path d="M456,192,300,180l23-89.4C329,64,322.22,48.73,300.53,42l-34.69-9.85a4,4,0,0,0-4.4,1.72l-129,202.34a8,8,0,0,1-6.81,3.81H16V448H133.61a48,48,0,0,1,15.18,2.46l76.3,25.43a80,80,0,0,0,25.3,4.11H428.32c19,0,31.5-13.52,35.23-32.16L496,305.58V232C496,209.94,478,194,456,192Z"/></svg>
                                <p>{course.numThumbsUp} %</p>
                            </div>
                        </div>

                        <div class="course-professor">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"> <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/> </svg>
                            <p>{course.professor}</p>
                        </div>

                        <div class="inscription-section">
                            <button class="course-button" onClick={ () => { navigate('/exercise_page')} }>
                                Comenzar curso
                            </button>
                            <p> <b>{course.numStudents} personas</b> ya tomaron este curso</p>
                        </div>
                    </div>
                </div>

                <div class="row page-light">
                    <nav id="navbar-course-content" class="navbar px-3 navbar-course-content">
                        <a class="navbar-brand" href="#">{course.title}</a>
                        <div>
                            <ul class="nav nav-pills">
                                <li class="nav-item">
                                    <a class="nav-link" href="#scrollspyHeading1">Acerca de</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#scrollspyHeading2">Programa</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="course-about" tabindex="0">
                        <div id="scrollspyHeading1">
                            <h4>Acerca de este Curso</h4>
                            <p class="course-views">{course.views} vistas recientes</p>
                            <p>{course.description}</p>

                            
                            <h5>Habilidades que obtendrás</h5>
                            <div class="course-skill">
                                {course.skills.map((skill) => {
                                    return (
                                        <p>{skill}</p>
                                    )
                                })}
                            </div>
                        </div>
                        
                        <hr class="course-divider"></hr>

                        <div id="scrollspyHeading2">
                            <h4>¿Qué aprenderas en este curso?</h4>
                            <p class="course-views"> 
                                Calificación del contenido 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 512 512"><title>ionicons-v5-k</title><path d="M456,192,300,180l23-89.4C329,64,322.22,48.73,300.53,42l-34.69-9.85a4,4,0,0,0-4.4,1.72l-129,202.34a8,8,0,0,1-6.81,3.81H16V448H133.61a48,48,0,0,1,15.18,2.46l76.3,25.43a80,80,0,0,0,25.3,4.11H428.32c19,0,31.5-13.52,35.23-32.16L496,305.58V232C496,209.94,478,194,456,192Z"/></svg>
                                {course.numThumbsUp}%
                                ({course.numReviews} calificaciones)                            
                            </p>
                            <p>{course.description}</p>
                            
                            {course.lessons.map((lesson) => {
                                return (
                                    <div class="row course-lessons">
                                        <div class="col-2 text-center">
                                            <p>Módulo</p>
                                            <h1>{lesson.id}</h1>
                                        </div>
                                        <div class="col-10">
                                            <p class="lesson-tittle">{lesson.title} {lesson.id}</p>
                                            <p class="lesson-description">{lesson.description}</p>

                                            <div class="d-flex lesson-duration">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="128 72 128 128 184 128" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                                                <p>{lesson.duration} para completar</p>
                                            </div>
                                            <hr></hr>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course;
