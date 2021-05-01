import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  baseUrl = 'http://localhost/';
  ranking: any;
  codigo;
  datos1: any;
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

  modrank(ranking) {
    return this.http.post(
      `${this.baseUrl}modcod.php`,
      JSON.stringify(ranking)
    );
  }

  UnListRankingAlumno(datos1) {
    return this.http.post(
      `${this.baseUrl}ListarUnRankingAlumno.php`,
      JSON.stringify(datos1)
    );
 }
 editarRanking(datos1) {
  return this.http.post(
    `${this.baseUrl}editRanking.php`,
    JSON.stringify(datos1)
  );
}

 borrarRanking(datos) {
    return this.http.post(
      `${this.baseUrl}borrarRanking.php`,
      JSON.stringify(datos)
    );
  }

  enviarCodigo(datos) {
  this.codigo=datos;
  }

  getCodigo() {
    return this.codigo;
    }


  setDatos(datos1){
    this.datos1=datos1;
  }

}
