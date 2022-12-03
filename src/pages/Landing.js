import { React, useState } from 'react'
import { useNavigate } from "react-router-dom";
import mockData from './mock_data/MockData';

import '../styles/Landing.css'

const Landing = () => {
    const navigate = useNavigate();
    const [coursesData, setCoursesData] = useState(mockData);

    const getCourse = (courseID) => {
        const { id, title, description } = coursesData[`${courseID}`];

        return (
            <>
                <div class="card" key={courseID}>
                    <div class="card-body">
                        <h5 class="card-title">{id}. {title}</h5>
                        <p class="card-text">{description}</p>
                        <button className='course-info-button' onClick={ () => { navigate('/course')} }>
                            Ver curso
                        </button>
                    </div>
                </div>
            </>
        )
    }   

    return (
        <>
        <div class='container'>
            <div class='row page-dark'>
                <div class='landing-intro'>
                    <h1>Aprende sin límites</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div class='landing-searchbar'>
                    <form class="d-flex">
                        <input class="form-control" type="search" placeholder="¿Qué deseas aprender?" aria-label="Search" aria-describedby="button-addon2"/>
                        <button id="button-addon2" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>
                        </button>
                    </form>
                </div>
            </div>

            <div class='row page-light  d-flex justify-content-center'>
                <div class='landing-course-catalog'>
                    <h3>Comienza a aprender con cursos inteligentes</h3>
                    <h6>Cursos en línea gratuitos que se adaptan a tu manera de aprender.</h6>
                </div>
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <div class="row row-cols-1 row-cols-md-3">
                                <div class="col mb-4">
                                    <div class="card-deck">
                                        {getCourse(1)}
                                    </div>
                                </div>
                                <div class="col mb-4">
                                    <div class="card-deck">
                                        {getCourse(2)}
                                    </div>
                                </div>
                                <div class="col mb-4">
                                    <div class="card-deck">
                                        {getCourse(3)}
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <div class="row row-cols-1 row-cols-md-3">
                                <div class="col mb-4">
                                    <div class="card-deck">
                                        {getCourse(4)}
                                    </div>
                                </div>
                                <div class="col mb-4">
                                    <div class="card-deck">
                                        {getCourse(5)}
                                    </div>
                                </div>
                                <div class="col mb-4">
                                    <div class="card-deck">
                                        {getCourse(6)}
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="carousel-item">
                            <div class="row row-cols-1 row-cols-md-3">
                                <div class="col mb-4">
                                    <div class="card-deck">
                                        {getCourse(7)}
                                    </div>
                                </div>
                                <div class="col mb-4">
                                    <div class="card-deck">
                                        {getCourse(8)}
                                    </div>
                                </div>
                                <div class="col mb-4">
                                    <div class="card-deck">
                                        {getCourse(9)}
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Landing;
