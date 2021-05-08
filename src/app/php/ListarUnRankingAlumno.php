<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonRanking = json_decode($texto);

$instruccion1 ="SELECT count(*) AS cuantos FROM alumno_rankings WHERE cod =$texto";
$result = mysqli_query($con, $instruccion1);
  while ($fila1 = $result->fetch_assoc()) {
    $numero=$fila1["cuantos"];
  }
  if($numero==0){
  echo('{ "result": "ERROR" }');
  } else{

$instruccion = "SELECT `nick`, `nombre`, `apellidos`, `bonus1`+ `bonus2`+ `bonus3`+ `bonus4`+ `bonus5`+ `bonus6`+ `bonus7`+ `bonus8`+ `bonus9`+ `bonus10`+`bonus11`+ `bonus12`+ `bonus13`+ `bonus14`+ `bonus15`+ `bonus16`+ `bonus17`+ `bonus18`+ `bonus19`+ `bonus20`+ `bonus21`+ `bonus22`+`bonus23`+ `bonus24`+ `bonus25`+ `bonus26`+ `bonus27`+ `bonus28`+ `bonus29`+ `bonus30`+ `bonus31`+ `bonus32`+ `bonus33`+ `bonus34`+`bonus35`+`bonus36`+ `bonus37`+ `bonus38`+ `bonus39`+ `bonus40`+ `bonus41`+`bonus42`+ `bonus43`+ `bonus44`+ `bonus45`+ `bonus46`+ `bonus47`+ `bonus48`+ `bonus49`+ `bonus50` AS puntos FROM `alumno_rankings` WHERE cod=$texto ORDER BY puntos desc";



  if($res = mysqli_query($con,$instruccion)){
      while ($fila = $res->fetch_assoc()) {
        $datos [] =$fila;
      }
      echo(json_encode($datos));

    
  }
}

?>
