import { React } from 'react'
import { useNavigate } from 'react-router-dom';

import '../styles/Exercise.css'

const MediaExercise = () => {
    const navigate = useNavigate();
    const exercise = {
        id: 1,
        name: 'Exercise 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }

    return (
        <>
            <div class='container'>
                <div class='row page-dark justify-content-center'>
                    <div class='col-8'>
                        <h1>{exercise.name}</h1>
                        <p>{exercise.description}</p>
                    </div>
                </div>

                <div class='row'>
                    <div class='col-8 problem-box'>
                        <p class='problem-question'>¿Cuál es la pregunta 1?</p>
                        <img class='rounded mx-auto d-block' src='https://empowher.org/wp-content/uploads/2021/03/image-placeholder-350x350-1.png' alt='Esta es una imagen' />
                        <div class='problem-options'>
                            <div class='form-check'>
                                <input class='form-check-input' type='checkbox' value='' id='flexCheckDefault'/>
                                <label class='form-check-label' for='flexCheckDefault'>
                                    Default checkbox
                                </label>
                            </div>
                            <div class='form-check'>
                                <input class='form-check-input' type='checkbox' value='' id='flexCheckDefault'/>
                                <label class='form-check-label' for='flexCheckDefault'>
                                    Default checkbox
                                </label>
                            </div>
                            <div class='form-check'>
                                <input class='form-check-input' type='checkbox' value='' id='flexCheckDefault'/>
                                <label class='form-check-label' for='flexCheckDefault'>
                                    Default checkbox
                                </label>
                            </div>
                            <div class='form-check'>
                                <input class='form-check-input' type='checkbox' value='' id='flexCheckDefault'/>
                                <label class='form-check-label' for='flexCheckDefault'>
                                    Default checkbox
                                </label>
                            </div>
                        </div>
                        <button class="exercise-button" onClick={ () => alert('Correcto/Incorrecto') }>
                            Comprobar
                        </button>
                    </div>
                    
                    <div class='row page-dark justify-content-center'>
                        <div class='col'>
                            <p>{exercise.description}</p>
                        </div>
                    </div>

                    <div class='col-8 problem-box'>
                        <p class='problem-question'>¿Cuál es la pregunta 2?</p>
                        <iframe class='rounded mx-auto d-block' width='300px' src='https://roadmaptoprofit.com/wp-content/uploads/2018/10/video-placeholder.jpg' title='Este es un video' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
                        
                        <div class=' justify-content-center problem-input center-text'>
                            <input class='form-control' placeholder='Respuesta'></input>
                            <p>unidades</p>
                        </div>
                        <button class="exercise-button" onClick={ () => alert('Correcto/Incorrecto') }>
                            Comprobar
                        </button>
                    </div>
                    
                    <div class='row page-dark justify-content-center'>
                        <div class='col'>
                            <p>{exercise.description}</p>
                        </div>
                    </div>

                    <div class='col-8 problem-box-final'>
                        <p class='problem-question'>¿Cuál es la pregunta 3?</p>
                        <iframe class='rounded mx-auto d-block' src='https://i.ytimg.com/vi/F2snBnHBZg4/maxresdefault.jpg' title='Este es un audio' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
                        <div class='problem-options'>
                            <div class='form-check'>
                                <input class='form-check-input' type='checkbox' value='' id='flexCheckDefault'/>
                                <label class='form-check-label' for='flexCheckDefault'>
                                    Default checkbox
                                </label>
                            </div>
                            <div class='form-check'>
                                <input class='form-check-input' type='checkbox' value='' id='flexCheckDefault'/>
                                <label class='form-check-label' for='flexCheckDefault'>
                                    Default checkbox
                                </label>
                            </div>
                            <div class='form-check'>
                                <input class='form-check-input' type='checkbox' value='' id='flexCheckDefault'/>
                                <label class='form-check-label' for='flexCheckDefault'>
                                    Default checkbox
                                </label>
                            </div>
                            <div class='form-check'>
                                <input class='form-check-input' type='checkbox' value='' id='flexCheckDefault'/>
                                <label class='form-check-label' for='flexCheckDefault'>
                                    Default checkbox
                                </label>
                            </div>
                        </div>
                        <button class="exercise-button" onClick={ () => alert('Correcto/Incorrecto') }>
                            Comprobar
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MediaExercise;
