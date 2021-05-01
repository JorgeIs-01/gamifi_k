<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonRanking = json_decode($texto);


      $instruccion = "SELECT * FROM `alumno_rankings` WHERE cod=$texto ORDER BY apellidos ASC";


  if($res = mysqli_query($con,$instruccion)){
    while ($fila = $res->fetch_assoc()) {
      $datos [] =$fila;
  }
    header('Content-Type: application/json');
    echo(json_encode($datos));

  }
?>
