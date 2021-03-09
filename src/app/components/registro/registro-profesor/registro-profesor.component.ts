import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../models/profesor';
import { ProfesorService } from '../../../service/profesor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-profesor',
  templateUrl: './registro-profesor.component.html',
  styleUrls: ['./registro-profesor.component.css']
})
export class RegistroProfesorComponent implements OnInit {


  registerForm: FormGroup;
    submitted = false;
  constructor(private ProfesorService: ProfesorService,
    private Router: Router,
    private formBuilder: FormBuilder,
    ) { }

    profesorModel = new Profesor("", "", "", "", "", "");

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nick: ['', Validators.required],
      pwd: ['', [Validators.required, Validators.minLength(8)]],
      confirmpwd: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      centro:['', Validators.required],

    }, {
      validator: MustMatch('pwd', 'confirmpwd')
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
      this.ProfesorService.addprofesor(this.registerForm.value).subscribe(
        (datos: Profesor) => {
          if (datos['result'] === 'OK') {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Profesor registrado.',
              showConfirmButton: false,
              timer: 1500
            })
            this.Router.navigate(['/login-profesor']);

          }
          else if (datos['result'] === 'ERROR1'){
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'El usuario introducido ya existe',
            })
          }
        }
      )
  }
}


export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}

