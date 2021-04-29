import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/models/ranking';
import { RankingService } from 'src/app/service/ranking.service';

@Component({
  selector: 'app-un-ranking-alumne',
  templateUrl: './un-ranking-alumne.component.html',
  styleUrls: ['./un-ranking-alumne.component.css']
})
export class UnRankingAlumneComponent implements OnInit {

  ListaRanking;
  PerfilRanking : Ranking;
  Router : Router;
  rankingModel = new Ranking("", "", "");
  constructor(private rankingService: RankingService) { }

  ngOnInit(): void {
    // this.rankingService.getUnRanking(this.rankingService).subscribe(
    //   (datos: Ranking[]) => {

    //     this.ListaRanking = datos;

    //   }
    // );
  }

}
