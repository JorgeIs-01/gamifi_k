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

  constructor(private alumnoService: AlumnoService) {


  }

  ngOnInit(): void {
    this.perfilAlumno= this.alumnoService.getDatos();
  }

}
