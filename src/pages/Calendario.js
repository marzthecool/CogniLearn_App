import React from 'react';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';
import { useNavigate } from "react-router-dom";

const Calendario = () => {

    let navigate = useNavigate();
   

    return (
        <ScheduleComponent>   
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            <button  color= "white" onClick={() => { navigate('/student_board') }}>
             Regresar 
            </button>

        </ScheduleComponent>
    );
}

export default Calendario;
