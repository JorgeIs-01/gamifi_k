import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/app/service/ranking.service';
import { Ranking } from 'src/app/models/ranking';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-ranking-alumno',
  templateUrl: './listar-ranking-alumno.component.html',
  styleUrls: ['./listar-ranking-alumno.component.css']
})
export class ListarRankingAlumnoComponent implements OnInit {
  ListaRanking;
  PerfilRanking : Ranking;
  Router : Router;
  rankingModel = new Ranking("", "", "");

  constructor(private rankingService: RankingService) {

  }

  ngOnInit(): void {
    this.rankingService.ListRankingAlumno(this.rankingService).subscribe(
      (datos: Ranking[]) => {

        this.ListaRanking = datos;
        console.log(this.ListaRanking);

      }
    );
  }

}
