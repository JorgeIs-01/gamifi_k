<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

$datos = file_get_contents("php://input");
$jsonProfesor = json_decode($datos);

      $instruccion2 = "SELECT * FROM rankings WHERE NomProfesor='$jsonProfesor'";
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


