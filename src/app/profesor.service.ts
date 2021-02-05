import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registro_profesor } from './profesor';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  baseUrl = environment.baseurl;

  constructor( private http: HttpClient) { }

  addprofesor(profesor: registro_profesor){
  return this.http.post(`${this.baseUrl}/altaProfesor.php`,profesor)

}


}










