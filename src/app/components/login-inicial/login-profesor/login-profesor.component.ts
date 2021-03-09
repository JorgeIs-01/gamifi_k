import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesor';
import { ProfesorService } from 'src/app/service/profesor.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-profesor',
  templateUrl: './login-profesor.component.html',
  styleUrls: ['./login-profesor.component.css']
})
export class LoginProfesorComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  constructor(private profesorService: ProfesorService,
  private Router: Router,
  private formBuilder: FormBuilder,

  ) { }

  profesorModel = new Profesor("", "");

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nick: ['', Validators.required],
      pwd: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.profesorService.loginProfesor(this.registerForm.value).subscribe(
      (datos: Profesor) => {

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

    )
  }

}
