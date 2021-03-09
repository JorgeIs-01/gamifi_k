import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cambiarpwd } from '../../../models/cambiarpwd';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfesorService } from 'src/app/service/profesor.service';

@Component({
  selector: 'app-modificar-pwd-p',
  templateUrl: './modificar-pwd-p.component.html',
  styleUrls: ['./modificar-pwd-p.component.css'],
})
export class ModificarPwdPComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(
    private profesorService: ProfesorService,
    private Router: Router,
    private formBuilder: FormBuilder
  ) {}

  pwdModel = new Cambiarpwd('', '', '');

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        pwdA: ['', [Validators.required, Validators.minLength(8)]],
        pwdN: ['', [Validators.required, Validators.minLength(8)]],
        pwdN2: ['', [Validators.required, Validators.minLength(8)]],
      },
      {
        validator: MustMatch('pwdN', 'pwdN2'),
      }
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success

    this.profesorService
      .modificarPwd(this.registerForm.value)
      .subscribe((datos: Cambiarpwd) => {
        if (datos['result'] === 'ERROR') {
          Swal.fire({
            icon: 'error',
            title: datos['result'],
            text: datos['message'],
          });
        } else {
          if (datos != null) {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Contraseña modificada.',
              showConfirmButton: false,
              timer: 1500,
            });
            this.Router.navigate(['/perfil-profesor']);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Intentalo mas tarde!',
            });
          }
          this.profesorService.setDatos(datos);
        }
      });
  }
}
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
