import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import mockData from './mock_data/MockData';

import '../styles/courses.css';

const CourseCatalog = () => {
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
            <div class="container page-light">
                <div class="row course-row">
                    <div class="col">
                        <h1>Catálogo de Cursos</h1>
                        <p>Los cursos que tenemos:</p>

                        <div class="row row-cols-1 row-cols-md-3">
                            {Object.keys(coursesData).map(courseID => 
                                <div class="col mb-4">
                                    <div class="card-deck">
                                        {getCourse(courseID)}
                                    </div>
                                </div>
                            )}  
                        </div>           
                    </div>
                </div>          
            </div>
        </>
    )
}

export default CourseCatalog;
