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

$instruccion = "SELECT * FROM `alumno_rankings` WHERE cod=$texto ORDER BY puntos desc";


  if($res = mysqli_query($con,$instruccion)){
      while ($fila = $res->fetch_assoc()) {
        $datos [] =$fila;
      }
      echo(json_encode($datos));

    
  }
}

?>
