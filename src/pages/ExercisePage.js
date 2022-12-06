import { React } from 'react'
import { useNavigate } from "react-router-dom";

function ExercisePage() {
    const navigate = useNavigate();
    return (
        <div class='row justify-content-center'>
            <button class="course-button" onClick={ () => { navigate('/algebra_exercise')} }>
                Algebra
            </button>
            <button class="course-button" onClick={ () => { navigate('/media_exercise')} }>
                Media
            </button>
        </div>
    );
}

export default ExercisePage;