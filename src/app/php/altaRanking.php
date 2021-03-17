<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonRanking = json_decode($texto);

if(!$jsonRanking){
  exit("No hay datos");
}

// $instruccion ="SELECT count(*) AS cuantos FROM rankings WHERE nick = '$jsonRanking->NomRanking'";
// $result = mysqli_query($con, $instruccion);

// while ($fila = $result->fetch_assoc()) {
//     $numero=$fila["cuantos"];
// }
// if($numero!=0){
//   echo('{ "result": "ERROR1" }');
// }
else{

  $sentencia ="INSERT INTO `rankings` (`NomRanking`, `NomProfesor` ) VALUES ('$jsonRanking->nomRanking',
                                                                            '$jsonRanking->nomProfesor')";
  if ($res = mysqli_query($con,$sentencia)) {
    echo('{ "result": "OK" }');
  }

}
?>
