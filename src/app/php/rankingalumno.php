<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

nRank prof cod
      $instruccion2 = "SELECT rankings.* FROM rankings, alumno_rankings where rankings.Cod=alumno_rankings.cod AND nick='marti'";
      $result2 = mysqli_query($con, $instruccion2);

      while ($fila = $result2->fetch_assoc()) {
           $ranking [] =$fila;
      }

  if($res = mysqli_query($con,$instruccion2)){
    header('Content-Type: application/json');
    json_encode($ranking);
    echo(json_encode($ranking));

  } else{
      echo('{ "result": "ERROR", "message": "La contraseña no es correcta"  }');
    }

