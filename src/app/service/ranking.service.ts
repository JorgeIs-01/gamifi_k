import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  baseUrl = 'http://localhost/';
  ranking: any;

  constructor(private http: HttpClient) { }

  addRanking(ranking) {
    return this.http.post(
      `${this.baseUrl}altaRanking.php`,
      JSON.stringify(ranking)
    );
  }
  ListRankingAlumno(ranking) {
    return this.http.post(
      `${this.baseUrl}rankingalumno.php`,
      JSON.stringify(ranking)
    );
  }
  ListRanking(ranking) {
    return this.http.post(
      `${this.baseUrl}ranking.php`,
      JSON.stringify(ranking)
    );
  }

  entrarCodRanking(ranking) {
    return this.http.post(
      `${this.baseUrl}entrarRanking.php`,
      JSON.stringify(ranking)
    );
  }

  setRanking(ranking) {
    this.ranking = ranking;
  }

  getRanking() {
    return this.ranking;
  }

}
