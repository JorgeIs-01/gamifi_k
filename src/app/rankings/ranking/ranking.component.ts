import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';3
import { AlumnoService } from 'src/app/service/alumno.service';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  perfilAlumno : Alumno;

  constructor(private AlumnoService: AlumnoService) {

   }

  ngOnInit(): void {
    this.perfilAlumno= this.AlumnoService.getRanking();

  console.log(this.perfilAlumno);
  console.log(this.perfilAlumno[0].nick);
  console.log(this.perfilAlumno[1].nick);

}

}
