import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/service/alumno.service';
import { Router } from '@angular/router';
import { Cambiarpwd } from '../models/cambiarpwd';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-modificar-pwd',
  templateUrl: './modificar-pwd.component.html',
  styleUrls: ['./modificar-pwd.component.css']
})
export class ModificarPwdComponent implements OnInit {

  Cambiarpwd = new Cambiarpwd("", "", "");

  constructor(private alumnoService: AlumnoService,
    private Router: Router,

    ) {
  }

  ngOnInit(): void {
    // this.Cambiarpwd = this.alumnoService.getDatos();
  }

  onFormSubmit(itemForm: any): void {
    console.log(this.Cambiarpwd.pwdA);

      this.alumnoService.modificarPwd(this.Cambiarpwd).subscribe(
        (datos: Cambiarpwd) => {
          if (datos!= null) {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Contraseña modificada.',
              showConfirmButton: false,
              timer: 1500
            })
            this.Router.navigate(['/perfil-alumno']);

          }
          else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Intentalo mas tarde!',
            })
          }

          this.alumnoService.setDatos(datos);
        })

    }

  }
