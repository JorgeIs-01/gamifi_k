import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/app/service/ranking.service';
import { Ranking } from 'src/app/models/ranking';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AlumnoService } from 'src/app/service/alumno.service';

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
    private alumnoService: AlumnoService,
    private Router : Router) {

     console.log(this.alumnoService["datos"][0].nick);

  }

  ngOnInit(): void {
    this.rankingService.ListRankingAlumno(this.alumnoService["datos"][0].nick).subscribe(
      (datos: Ranking[]) => {
        this.ListaRanking = datos;

      }
    );
  }



  ver(index:number){
    this.rankingService.UnListRankingAlumno(this.ListaRanking[index].Cod).subscribe(
          (datos1: any) => {
            console.log(datos1);
            this.rankingService.enviarCodigo(datos1);

            if (datos1 != null) {
             this.Router.navigate(['/un-ranking-alumne']);

            }
            else{
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se ha podido entrar al ranking.',
              })

            }
          }
        )
      }
    }
