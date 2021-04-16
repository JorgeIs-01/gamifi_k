import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ranking } from 'src/app/models/ranking';
import { RankingService } from 'src/app/service/ranking.service';
import { AlumnoService } from 'src/app/service/alumno.service';
import { Alumno } from 'src/app/models/alumno';



@Component({
  selector: 'app-entrar-ranking',
  templateUrl: './entrar-ranking.component.html',
  styleUrls: ['./entrar-ranking.component.css']
})
export class EntrarRankingComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  awd : Alumno;
  constructor(public perfilAlumno: AlumnoService,
    private RankingService: RankingService,
    private Router: Router,
    private formBuilder: FormBuilder,) { }

  ranking = new Ranking("", "");


  ngOnInit(): void {
    this.perfilAlumno= this.perfilAlumno.getDatos();
    this.registerForm = this.formBuilder.group({
      codRanking: ['', Validators.required],
      nick: [this.perfilAlumno[0].nick, Validators.required],
      nombre: [this.perfilAlumno[0].nombre, Validators.required],
      apellidos: [this.perfilAlumno[0].apellidos, Validators.required],

  });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }
    console.log(this.registerForm.value);

    this.RankingService.entrarCodRanking(this.registerForm.value).subscribe(
      (datos: Ranking) => {
        if (datos['result'] === 'OK') {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Has entrado al ranking.',
            showConfirmButton: false,
            timer: 1500
          })
         this.Router.navigate(['/ranking']);

        }
        else if (datos['result'] === 'ERROR1'){
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ya estas en este ranking',
          })
        }
        else if (datos['result'] === 'ERROR2'){
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El codigo del ranking no esta operativo',
          })
        }
      }
    )
  }
  }
