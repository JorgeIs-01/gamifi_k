import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  baseUrl = 'http://localhost/';
  datos: any;

  constructor(private http: HttpClient) { }

  addRanking(ranking) {
    return this.http.post(
      `${this.baseUrl}altaRanking.php`,
      JSON.stringify(ranking)
    );
  }

  ListRanking(datos) {
    return this.http.post(
      `${this.baseUrl}Ranking.php`,
      JSON.stringify(datos)
    );
  }

  setRanking(datos) {
    this.datos = datos;
  }

  getRanking() {
    return this.datos;
  }

}
