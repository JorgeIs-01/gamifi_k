import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModpuntService {
  // baseUrl = 'http://localhost:8080/';
  baseUrl = 'http://localhost/';

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
