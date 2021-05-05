import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ranking } from 'src/app/models/ranking';
import { RankingService } from 'src/app/service/ranking.service';
import { Profesor } from 'src/app/models/profesor';
import { ProfesorService } from 'src/app/service/profesor.service';



@Component({
  selector: 'app-crear-ranking',
  templateUrl: './crear-ranking.component.html',
  styleUrls: ['./crear-ranking.component.css']
})
export class CrearRankingComponent implements OnInit {


  registerForm: FormGroup;
  submitted = false;
  awd : Profesor;
  nick: String;
  //si pones el perfilprofesor en public no muestra error
  constructor(public perfilProfesor: ProfesorService,
    private RankingService: RankingService,
    private Router: Router,
    private formBuilder: FormBuilder,
    ) { }

  ranking = new Ranking("", "");


  ngOnInit(): void {
    this.perfilProfesor= this.perfilProfesor.getDatos();
    this.nick= localStorage.getItem('nick');
    this.registerForm = this.formBuilder.group({
      nomRanking: ['', Validators.required],
      nomProfesor: [this.nick, Validators.required],




  });
  console.log(this.perfilProfesor);
  console.log(this.registerForm);
}


get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;

  if (this.registerForm.invalid) {
      return;
  }

  this.RankingService.addRanking(this.registerForm.value).subscribe(
    (datos: Ranking) => {
      if (datos['result'] === 'OK') {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Ranking registrado.',
          showConfirmButton: false,
          timer: 1500
        })
       this.Router.navigate(['/ranking']);

      }
      else if (datos['result'] === 'ERROR1'){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El nombre del Ranking introducido ya existe',
        })
      }
    }
  )
}
}
