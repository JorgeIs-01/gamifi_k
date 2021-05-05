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
  apellido: string;
  nick: string;
  email: string;
  pwd: string;
  nombre: string;
  centro: string;
  constructor(private profesorService: ProfesorService) { }

  ngOnInit(): void {

    this.perfilProfesor= this.profesorService.getDatos();
    this.apellido= localStorage.getItem('apellido');
    this.email= localStorage.getItem('email');
    this.nick= localStorage.getItem('nick');
    this.nombre= localStorage.getItem('nombre');
    this.pwd= localStorage.getItem('pwd');
    this.centro= localStorage.getItem('centro');

  }

}

