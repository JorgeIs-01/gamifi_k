import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModpuntService {
  //Cambiar el 8080 si no funciona
  baseUrl = 'http://localhost:8080/';
  cod: any;

  constructor(private http: HttpClient) { }

  guardarpunt(ranking) {
    console.log(ranking);

    return this.http.post(
      `${this.baseUrl}guardarpunt.php`,
      JSON.stringify(ranking)
    );
  }
}
