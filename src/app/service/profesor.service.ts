import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  baseUrl = 'http://localhost/';
  datos: any;

  constructor(private http: HttpClient) { }

  addprofesor(profesor) {
    return this.http.post(`${this.baseUrl}altaProfesor.php`, JSON.stringify(profesor));
  }

  loginProfesor(profesor) {
    return this.http.post(`${this.baseUrl}loginProfesor.php`, JSON.stringify(profesor));
  }

  modificarprofesor(profesor) {
    return this.http.post(`${this.baseUrl}modProfesor.php`, JSON.stringify(profesor));
  }

  setDatos(datos) {
    this.datos = datos;
  }

  getDatos() {
    return this.datos;
  }


}










