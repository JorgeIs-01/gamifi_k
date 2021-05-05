import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/service/alumno.service';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.css']
})
export class PerfilAlumnoComponent implements OnInit {

  perfilAlumno: Alumno;
  nombreAlumno: any;
  apellido: string;
  nick: string;
  email: string;
  pwd: string;
  nombre: string;
  constructor(private alumnoService: AlumnoService) {


  }

  ngOnInit(): void {
    this.perfilAlumno= this.alumnoService.getDatos();
    this.apellido= localStorage.getItem('apellido');
    this.email= localStorage.getItem('email');
    this.nick= localStorage.getItem('nick');
    this.nombre= localStorage.getItem('nombre');
    this.pwd= localStorage.getItem('pwd');
    console.log(this.nombreAlumno);
  }



}
