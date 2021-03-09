import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  baseUrl = 'http://localhost/';
  datos: any;

  constructor(private http: HttpClient) { }

  addAlumno(alumno) {
    return this.http.post(`${this.baseUrl}altaAlumno.php`, JSON.stringify(alumno));
  }

  loginAlumno(alumno) {
    return this.http.post(`${this.baseUrl}loginAlumno.php`, JSON.stringify(alumno));
  }

  modificaralumno(alumno) {
    return this.http.post(`${this.baseUrl}modAlumno.php`, JSON.stringify(alumno));
  }

  modificarPwd(alumno) {
    return this.http.post(`${this.baseUrl}modpwd.php`, JSON.stringify(alumno));
  }

  setDatos(datos) {
    this.datos = datos;
  }

  getDatos() {
    return this.datos;
  }


}
