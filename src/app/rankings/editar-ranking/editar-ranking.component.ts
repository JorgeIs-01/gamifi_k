import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RankingService } from 'src/app/service/ranking.service';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/models/ranking';
import Swal from 'sweetalert2';

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
    private formBuilder: FormBuilder,
    private rankingService: RankingService
  ) {}

  ngOnInit(): void {
    this.Ranking = this.rankingService.getCodigo();
  }

  mod(index: number) {
    console.log(this.PerfilRanking);

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
        console.log(result.value.login);
        console.log(this.ListaRanking[index]);

        this.rankingService
          .guardarpunt(result.value.login)
          .subscribe((datos: any) => {
            console.log(datos);
            this.rankingService.enviarCodigo(datos);
            if (datos['result'] === 'ERROR') {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El Ranking esta vacio ',
              });
            } else {
              this.Router.navigate(['/un-ranking-profe']);
            }
          });
      }
    });
  }
}
