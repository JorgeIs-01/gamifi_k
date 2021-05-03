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
  ListaRanking;
  PerfilRanking: Ranking;
  Ranking: any;
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private Router: Router,
    private rankingService: RankingService,
    private ModpuntService: ModpuntService
  ) {}
  awd = new guardarpuntos("", "");

  ngOnInit(): void {
    this.Ranking = this.rankingService.getCodigo();
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
              console.log(datos);

              this.Router.navigate(['/un-ranking-profe']);
            }
          });
      }
    });
  }
}
