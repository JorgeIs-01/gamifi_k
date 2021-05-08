import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RankingService } from 'src/app/service/ranking.service';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/models/ranking';
import Swal from 'sweetalert2';
import { ModpuntService } from 'src/app/service/modpunt.service';
import { guardarpuntos } from '../../../app/models/guardarpuntos';

@Component({
  selector: 'app-editar-ranking',
  templateUrl: './editar-ranking.component.html',
  styleUrls: ['./editar-ranking.component.css'],
})
export class EditarRankingComponent implements OnInit {

  PerfilRanking: Ranking;
  Ranking: any;
  registerForm: FormGroup;
  submitted = false;
  bonus;
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = 'BONUS1';
  nick: string;

  constructor(
    private Router: Router,
    private rankingService: RankingService,
    private ModpuntService: ModpuntService

  ) {
    this.bonus=["BONUS1","BONUS2","BONUS3","BONUS4","BONUS5","BONUS6","BONUS7","BONUS8","BONUS9","BONUS10","BONUS11","BONUS12","BONUS13","BONUS14","BONUS15","BONUS16","BONUS17","BONUS18","BONUS19","BONUS20","BONUS21","BONUS22","BONUS23","BONUS24","BONUS25","BONUS26","BONUS27","BONUS28","BONUS29","BONUS30","BONUS31","BONUS32","BONUS33","BONUS34","BONUS35","BONUS36","BONUS37","BONUS38","BONUS39","BONUS40","BONUS41","BONUS42","BONUS43","BONUS44","BONUS45","BONUS46","BONUS47","BONUS48","BONUS49","BONUS50"];
  }
  awd = new guardarpuntos("", "");

  ngOnInit(): void {
    // this.Ranking = this.rankingService.getCodigo();
    this.awd.bonus=this.verSeleccion;
    this.awd.cod= localStorage.getItem('Cod');


    this.rankingService
    .ListarRankingBonus(this.awd)
    .subscribe((datos: any) => {
      console.log(datos);
      this.Ranking=datos
    })


  }

  capturar(){
    this.verSeleccion = this.opcionSeleccionado;
    this.awd.bonus=this.verSeleccion;
    this.awd.cod= localStorage.getItem('Cod');


    this.rankingService
    .ListarRankingBonus(this.awd)
    .subscribe((datos: any) => {
      console.log(datos);
      this.Ranking=datos
    })
  }

  mod(index: number) {
    console.log(this.Ranking[index].nick);
    this.awd.cod = this.Ranking[index].nick;
    Swal.fire({
      title: 'Puntuación:',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      preConfirm: (puntuacion) => {
        return fetch(`//api.github.com/users/${puntuacion}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        this.awd.puntos = result.value.login;
        console.log(this.awd);

        this.ModpuntService
          .guardarpunt(this.awd)
          .subscribe((datos: any) => {
            this.rankingService.enviarCodigo(datos);
            if (datos['result'] === 'ERROR') {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El Ranking esta vacio ',
              });
            } else {
              window.location.reload();
              this.Router.navigate(['/un-ranking-profe']);
            }
          });
      }
    });
  }
}
