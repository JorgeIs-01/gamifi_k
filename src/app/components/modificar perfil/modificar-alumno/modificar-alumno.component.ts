import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from '../../../service/alumno.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-alumno',
  templateUrl: './modificar-alumno.component.html',
  styleUrls: ['./modificar-alumno.component.css']
})
export class ModificarAlumnoComponent implements OnInit {

  perfilAlumno : Alumno;

  constructor(private AlumnoService: AlumnoService,
    private Router: Router,
    ) { }

    alumnoModel = new Alumno("", "", "", "", "");


  ngOnInit(): void {
    this.perfilAlumno= this.AlumnoService.getDatos();

  }
  onFormSubmit(itemForm: any): void {

    this.alumnoModel = new Alumno(
      this.perfilAlumno[0].nick,
      this.perfilAlumno[0].pwd,
      this.perfilAlumno[0].email,
      this.perfilAlumno[0].nombre,
      this.perfilAlumno[0].apellidos);

    this.AlumnoService.modificaralumno(this.alumnoModel).subscribe(
      (datos: Alumno) => {
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
            text: 'El usuario introducido ya existe',
          })
        }
        this.AlumnoService.setDatos(datos);

      }
    )

  }

}

