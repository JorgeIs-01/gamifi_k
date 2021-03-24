import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Ranking } from 'src/app/models/ranking';
import { RankingService } from 'src/app/service/ranking.service';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  PerfilRanking : Ranking;

  constructor(private rankingService: RankingService) {

   }

  ngOnInit(): void {

    this.PerfilRanking= this.rankingService.getRanking();
    console.log(this.PerfilRanking);


}

}
