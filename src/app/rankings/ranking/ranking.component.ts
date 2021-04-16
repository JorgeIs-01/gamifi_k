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

  PerfilRanking : Ranking;
  Router : Router;
  rankingModel = new Ranking("", "", "");
  constructor(private rankingService: RankingService) {

   }

  ngOnInit(): void {

    this.PerfilRanking= this.rankingService.getRanking();
    console.log(this.PerfilRanking);


}

onFormSubmit(itemForm: any): void {

  this.rankingModel = new Ranking(
    this.rankingModel[0].NomRanking,
    this.rankingModel[0].NomProfesor,
    this.rankingModel[0].Cod);


  this.rankingService.ListRanking(this.rankingService).subscribe(
    (datos: Ranking) => {
      if (datos!= null) {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Profesor modificado.',
          showConfirmButton: false,
          timer: 1500
        })
        this.Router.navigate(['/perfil-profesor']);

      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El usuario introducido ya existe',
        })
      }

      this.rankingService.setRanking(datos);
    })

}

}
