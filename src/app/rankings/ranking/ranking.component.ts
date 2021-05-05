import { Component, OnInit } from '@angular/core';
import { Ranking } from 'src/app/models/ranking';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RankingService } from 'src/app/service/ranking.service';
import { AlumnoService } from 'src/app/service/alumno.service';
import { ProfesorService } from 'src/app/service/profesor.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  ListaRanking;
  PerfilRanking: Ranking;
  rankingModel = new Ranking('', '', '');
  constructor(
    private rankingService: RankingService,
    private profesorService: ProfesorService,
    private Router: Router
  ) { }

  ngOnInit(): void {
    this.rankingService
      .ListRanking(this.profesorService['datos'][0].nick)
      .subscribe((datos: Ranking[]) => {
        this.ListaRanking = datos;
        console.log(this.ListaRanking);
      });
  }
  borrar(index: number) {
    Swal.fire({
      title: 'Estas seguiro que quieres eliminar el Ranking?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.rankingService
          .borrarRanking(this.ListaRanking[index].Cod)
          .subscribe((datos1: any) => {
            console.log(datos1);
            //1 Forma de refrescar
            //window.location.reload();

            if (datos1['result'] === 'OK') {

              Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'El Ranking se ha eliminado.',
                showConfirmButton: false,
                timer: 1500,
              });
              this.Router.navigate(['/ranking']);


            } else if (datos1['result'] === 'ERROR1') {

              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El Ranking no se ha podido eliminar',

              });
            }
          });
      }
    });
  }

  ver(index: number) {
    this.rankingService
      .UnListRankingAlumno(this.ListaRanking[index].Cod)
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

  modcod(index: number) {
    Swal.fire({
      title: 'Estas seguiro que quieres resetear el codigo Ranking?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Resetear',
    }).then((result) => {
      if (result.isConfirmed) {
        this.rankingService
          .modrank(this.ListaRanking[index].Cod)
          .subscribe((datos1: any) => {
            console.log(datos1);

            if (datos1['result'] === 'OK') {
              Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'El codigo del Ranking se ha reseteado correctamente',
                showConfirmButton: false,
                timer: 1500,
              });
              this.Router.navigate(['/ranking']);
            } else if (datos1['result'] === 'ERROR1') {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se ha podido resetear el codigo. ',
              });
            }
          });
      }
    });
  }

  edit(index: number) {
    this.rankingService
      .editarRanking(this.ListaRanking[index].Cod)
      .subscribe((datos2: any) => {
        console.log(datos2);
        this.rankingService.enviarCodigo(datos2);
        if (datos2['result'] === 'ERROR') {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El Ranking esta vacio',
          });
        } else {

          this.Router.navigate(['/editar-ranking']);
        }
      });
  }

  refresh(): void {
    window.location.reload();
  }



  onFormSubmit() { }
}
