import React from 'react';
import '../styles/PerfilEstudiante.css'
import login from '../assets/img/login.png'


const PerfilEstudiante = () => {

    return (
        <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                           <img src={login} alt="Avatar" class="avatar"/>
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                            <h5>
                                Estudiante
                            </h5>
                            <div class="panel">
                                <div class="bio-graph-heading">
                                    Descripcion: Aqui va la descripcion del alumno ---------------------------------------
                                </div>
                            </div>
                            <hr></hr>
                            
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Acerca Mi</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Progresos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Mis cursos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Editar Perfil"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">Avances Algebra</i></h6>
                            <small>Algebra</small>
                            <div class="progress" >
                                <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                            </div>
                      
                           <br></br>
                       
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row">
                                <br/>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Nombre Completo</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Estudiante</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Correo</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>12345678@tec.mx</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Num.Tef</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>123456789</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Fecha de nacimiento</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p> 01/01/2022</p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default PerfilEstudiante;