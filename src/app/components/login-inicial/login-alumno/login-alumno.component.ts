import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../models/alumno';
import { AlumnoService } from '../../../service/alumno.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.component.html',
  styleUrls: ['./login-alumno.component.css']
})
export class LoginAlumnoComponent implements OnInit {

  constructor(private alumnoService: AlumnoService,
    private Router: Router,
  ) { }

  alumnoModel = new Alumno("", "");

  ngOnInit() {
  }

  onFormSubmit(itemForm: any): void {

    this.alumnoModel = new Alumno(
      itemForm.controls.nick.value,
      itemForm.controls.pwd.value);


    this.alumnoService.loginAlumno(this.alumnoModel).subscribe(
      (datos: any) => {

        if (datos["result"] === "ERROR") {
          Swal.fire({
            icon: 'error',
            title: datos["result"],
            text: datos["message"]
          })
        }
        else {

          if (datos != null) {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Bienvenido Alumno.',
              showConfirmButton: false,
              timer: 1500
            })
            this.Router.navigate(['/perfil-alumno']);

          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Intentalo mas tarde!',
            })
          }
          this.alumnoService.setDatos(datos);
        }

      }

    )
  }

}
