import { Component, OnInit } from '@angular/core';
import { Ranking } from 'src/app/models/ranking';
import { RankingService } from 'src/app/service/ranking.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-un-ranking-profe',
  templateUrl: './un-ranking-profe.component.html',
  styleUrls: ['./un-ranking-profe.component.css']
})
export class UnRankingProfeComponent implements OnInit {
  ListaRanking;
  PerfilRanking : Ranking;
  Router : Router;
  Ranking;
  rankingModel = new Ranking("", "", "");
  constructor(private rankingService: RankingService) { }

  ngOnInit(): void {

    this.Ranking=this.rankingService.getCodigo();

  }

}
