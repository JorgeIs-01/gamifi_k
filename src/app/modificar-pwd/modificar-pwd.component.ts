import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/service/alumno.service';

import { Router } from '@angular/router';



@Component({
  selector: 'app-modificar-pwd',
  templateUrl: './modificar-pwd.component.html',
  styleUrls: ['./modificar-pwd.component.css']
})
export class ModificarPwdComponent implements OnInit {

  perfilAlumno: Alumno;
  alumnoModel = new Alumno("", "", "");

  constructor(private alumnoService: AlumnoService,
    private Router: Router,

    ) {
  }

  ngOnInit(): void {
    this.perfilAlumno = this.alumnoService.getDatos();
    console.log(this.perfilAlumno);
    console.log(this.perfilAlumno[0].nick);
  }

  onFormSubmit(itemForm: any): void {
    this.perfilAlumno = new Alumno(
      this.perfilAlumno[0].pwdA,
      this.perfilAlumno[0].pwdN,
      this.perfilAlumno[0].pwdN2,)

    }

  }

