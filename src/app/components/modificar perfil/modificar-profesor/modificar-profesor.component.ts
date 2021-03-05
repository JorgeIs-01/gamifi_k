import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../models/profesor';
import { ProfesorService } from '../../../service/profesor.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-profesor',
  templateUrl: './modificar-profesor.component.html',
  styleUrls: ['./modificar-profesor.component.css']
})
export class ModificarProfesorComponent implements OnInit {

  perfilProfesor: Profesor;
  profesorModel = new Profesor("", "", "", "", "", "");

  constructor(private profesorService: ProfesorService,
    private Router: Router,
    ) { }

  ngOnInit(): void {
    this.perfilProfesor= this.profesorService.getDatos();
  }

  onFormSubmit(itemForm: any): void {

    this.profesorModel = new Profesor(
      this.perfilProfesor[0].nick,
      this.perfilProfesor[0].pwd,
      this.perfilProfesor[0].email,
      this.perfilProfesor[0].nombre,
      this.perfilProfesor[0].apellidos,
      this.perfilProfesor[0].centro);


    this.profesorService.modificarprofesor(this.profesorModel).subscribe(
      (datos: Profesor) => {
        if (datos!= null) {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Profesor modificado.',
            showConfirmButton: false,
            timer: 1500
          })
          this.Router.navigate(['/perfil-profesor']);

        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El usuario introducido ya existe',
          })
        }

        this.profesorService.setDatos(datos);
      })

  }

}
