import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/app/service/ranking.service';
import { Ranking } from 'src/app/models/ranking';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-ranking-alumno',
  templateUrl: './listar-ranking-alumno.component.html',
  styleUrls: ['./listar-ranking-alumno.component.css']
})
export class ListarRankingAlumnoComponent implements OnInit {
  ListaRanking;
  PerfilRanking : Ranking;
  rankingModel = new Ranking("", "", "");

  constructor(private rankingService: RankingService,
    private Router : Router) {

  }

  ngOnInit(): void {
    this.rankingService.ListRankingAlumno(this.rankingService).subscribe(
      (datos: Ranking[]) => {
        this.ListaRanking = datos;
      }
    );
  }

  ver(index:number){
    this.rankingService.UnListRankingAlumno(this.ListaRanking[index].Cod).subscribe(
          (datos1: any) => {
            console.log(datos1);
            if (datos1 != null) {
              Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Se ha entrado al ranking correctamente.',
                showConfirmButton: false,
                timer: 1500
              })
             this.Router.navigate(['/un-ranking-alumne']);

            }
            else if (datos1['result'] === 'ERROR1'){
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se ha podido entrar al ranking.',
              })
            }
            else{
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se adwdwddd podido entrar al ranking.',
              })

            }
          }
        )
      }
    }
