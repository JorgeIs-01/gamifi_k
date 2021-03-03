import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../models/alumno';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  baseUrl = 'http://localhost/';

constructor(private http: HttpClient) { }

addAlumno(alumno){
  return this.http.post(`${this.baseUrl}altaAlumno.php`, JSON.stringify(alumno));
}

loginAlumno(alumno){
  return this.http.post(`${this.baseUrl}loginAlumno.php`, JSON.stringify(alumno));
}

modificaralumno(alumno){
  return this.http.post(`${this.baseUrl}modAlumno.php`, JSON.stringify(alumno));
}


}
