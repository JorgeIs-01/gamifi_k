import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router';
import { Profesor } from 'src/app/models/profesor';
import { ProfesorService } from 'src/app/service/profesor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-profesor',
  templateUrl: './login-profesor.component.html',
  styleUrls: ['./login-profesor.component.css']
})
export class LoginProfesorComponent implements OnInit {

  constructor(private profesorService: ProfesorService,
    private Router: Router,
    ) { }

    profesorModel = new Profesor("", "");

  ngOnInit() {
  }

  onFormSubmit(itemForm: any): void {

    this.profesorModel = new Profesor(
      itemForm.controls.nick.value,
      itemForm.controls.pwd.value);

    this.profesorService.loginProfesor(this.profesorModel).subscribe(
      (datos: Profesor) => {
        if (datos["result"] === "ERROR") {
          Swal.fire({
            icon: 'error',
            title: datos["result"],
            text: datos["message"]
          })
        }
        else {

        if (datos!= null) {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Bienvenido Profesor.',
            showConfirmButton: false,
            timer: 1500
          })
          this.Router.navigate(['/perfil-profesor']);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Intentalo mas tarde!',
          })
        }
        this.profesorService.setDatos(datos);
      }
      }

    )}

}
