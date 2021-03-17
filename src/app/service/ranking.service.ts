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
}
