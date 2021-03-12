import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from '../../../service/alumno.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-alumno',
  templateUrl: './modificar-alumno.component.html',
  styleUrls: ['./modificar-alumno.component.css']
})
export class ModificarAlumnoComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
  perfilAlumno : Alumno;
  alumnoModel = new Alumno("", "", "", "", "");

  constructor(private AlumnoService: AlumnoService,
    private Router: Router,
    private formBuilder: FormBuilder,
    ) { }



  ngOnInit(): void {
    this.perfilAlumno= this.AlumnoService.getDatos();
    console.log(this.perfilAlumno);
    this.registerForm = this.formBuilder.group({
      nick: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],

    })
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.AlumnoService.modificaralumno(this.alumnoModel).subscribe(
      (datos: Alumno) => {
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
            title: 'Alumno modificado.',
            showConfirmButton: false,
            timer: 1500
          })
          this.Router.navigate(['/perfil-alumno']);

        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Intentalo más tarde.',
          })
        }
        this.AlumnoService.setDatos(datos);

      }
      })

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
  }
}

