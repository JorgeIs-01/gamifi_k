<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonRanking= json_decode($texto);


if(!$jsonRanking){
    
  exit("No hay datos");

}

  $sentencia ="UPDATE `alumno_rankings` SET `puntos`=$texto WHERE `nick`='marti'";

  if ($res = mysqli_query($con, $sentencia)) {

      while ($fila = $result2->fetch_assoc()) {
        $datos [] =$fila;


    }
    if($datos){
      header('Content-Type: application/json');
      json_encode($datos);
      echo(json_encode($texto));

    }
  } else {
    echo('{ "result": "ERROR"}');
  }
