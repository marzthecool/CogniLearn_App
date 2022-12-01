import React from 'react';
import '../styles/PerfilMaestro.css'
import loginmaestro from '../assets/img/loginmaestro.png'


const PerfilEstudiante = () => {

    return (
        <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={loginmaestro} alt="Avatar" class="avatar" />

                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                            <h5>
                                Maestro
                            </h5>
                            <div class="panel">
                                <div class="bio-graph-heading">
                                    Biografia: Aqui va la Biografia del maestro ---------------------------------------
                                </div>
                            </div>
                            <hr></hr>

                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Acerca Mi</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Curso Asignado</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Lista</a>
                                </li>
                            </ul>
                        </div>
                    </div>
            
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <ul >
                                <li><i class="fa fa-user"></i> Perfil</li>
                                <li><i class="fa fa-calendar"></i> Calendario</li>
                                <li><i class="fa fa-edit"></i> Editar Perfil</li>
                            </ul>

                        </div>
                    </div>

                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row">
                                    <br />
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Nombre Completo</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Maestro Asignado</p>
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
                                <br></br>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default PerfilEstudiante;


