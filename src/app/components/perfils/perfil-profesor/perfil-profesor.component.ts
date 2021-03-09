import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/profesor';
import { ProfesorService } from 'src/app/service/profesor.service';

@Component({
  selector: 'app-perfil-profesor',
  templateUrl: './perfil-profesor.component.html',
  styleUrls: ['./perfil-profesor.component.css']
})
export class PerfilProfesorComponent implements OnInit {

  perfilProfesor: Profesor;
  constructor(private profesorService: ProfesorService) { }

  ngOnInit(): void {
    this.perfilProfesor= this.profesorService.getDatos();
  }

}

