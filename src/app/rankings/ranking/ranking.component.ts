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
  rankingModel = new Ranking("", "", "");
  constructor(private rankingService: RankingService,
    private Router : Router
    ) {

   }

  ngOnInit(): void {

    this.rankingService.ListRanking(this.rankingService).subscribe(
      (datos: Ranking[]) => {

        this.ListaRanking = datos;
        console.log(this.ListaRanking);

      }
    );

}
borrar(index:number){
  Swal.fire({
    title: 'Estas seguiro?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Eliminar'
  }).then((result) => {
    if (result.isConfirmed) {

      this.rankingService.borrarRanking(this.ListaRanking[index].Cod).subscribe(
        (datos1: any) => {
          console.log(datos1);

          if (datos1['result'] === 'OK') {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'El Ranking se ha eliminado.',
              showConfirmButton: false,
              timer: 1500
            })
           this.Router.navigate(['/ranking']);

          }
          else if (datos1['result'] === 'ERROR1'){
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'El Ranking no se ha podido eliminar',
            })
          }
        }
      )
    }
  })
  }

  ver(index:number){
    this.rankingService.UnListRankingAlumno(this.ListaRanking[index].Cod).subscribe(
          (datos: any) => {
            console.log(datos);
            this.rankingService.enviarCodigo(datos);

            if (datos != null) {
              Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Se ha entrado al ranking correctamente.',
                showConfirmButton: false,
                timer: 1500
              })
             this.Router.navigate(['/un-ranking-profe']);

            }
            else if (datos = null){
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se ha podido entrar al ranking.',
              })
            }
          }
        )
      }


onFormSubmit() {


}
}
