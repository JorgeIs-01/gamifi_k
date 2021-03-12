import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../models/alumno';
import { AlumnoService } from '../../../service/alumno.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.component.html',
  styleUrls: ['./login-alumno.component.css']
})
export class LoginAlumnoComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  constructor(private alumnoService: AlumnoService,
    private Router: Router,
    private formBuilder: FormBuilder,

  ) { }

  alumnoModel = new Alumno("", "");

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

    // display form values on success
    this.alumnoService.loginAlumno(this.registerForm.value).subscribe(
      (datos: Alumno) => {

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
