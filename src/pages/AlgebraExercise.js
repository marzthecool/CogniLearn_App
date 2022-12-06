import { React } from 'react'
import { useNavigate } from 'react-router-dom';

import '../styles/Exercise.css'

const AlbegraExercise = () => {
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
                        <p class='problem-question'>Despeja x</p>
                        <div>
                            <p>
                            2x + 3 = 5
                            </p>
                        </div>
                        <div class='problem-input'>
                            <p> x = </p>
                            <input class='form-control' placeholder='Respuesta'></input>
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
                        <p class='problem-question'>Despeja y</p>
                        <div>
                            <p>
                            y + 3 = 5
                            </p>
                        </div>
                        <div class='problem-input'>
                            <p> y = </p>
                            <input class='form-control' placeholder='Respuesta'></input>
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
                        
                    <p class='problem-question'>Despeja z</p>
                        <div>
                            <p>
                            9z + 3 = 5
                            </p>
                        </div>
                        <div class='problem-input'>
                            <p> z = </p>
                            <input class='form-control' placeholder='Respuesta'></input>
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

export default AlbegraExercise;
