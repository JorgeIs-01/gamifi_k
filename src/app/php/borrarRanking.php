<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonRanking = json_decode($texto);

      $instruccion1 = "DELETE FROM `alumno_rankings` WHERE cod=$texto";

      $instruccion2 = "DELETE FROM `rankings` WHERE Cod=$texto";


  if($res = mysqli_query($con,$instruccion2) && $res = mysqli_query($con,$instruccion1)){
    header('Content-Type: application/json');
    echo(json_encode($texto));
  } else{
    echo(json_encode('error'));
    }


    ?>
