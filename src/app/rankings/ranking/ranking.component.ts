import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Ranking } from 'src/app/models/ranking';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RankingService } from 'src/app/service/ranking.service';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  ListaRanking;
  PerfilRanking : Ranking;
  Router : Router;
  rankingModel = new Ranking("", "", "");
  constructor(private rankingService: RankingService) {

   }

  ngOnInit(): void {

    this.rankingService.ListRanking(this.rankingService).subscribe(
      (datos: Ranking[]) => {

        this.ListaRanking = datos;
        console.log(this.ListaRanking);

      }
    );


}

onFormSubmit(itemForm: any): void {

}

}
