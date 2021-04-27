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


else{


$instruccion ="SELECT count(*) AS cuantos FROM `alumno_rankings` WHERE nick = '$jsonRanking->nick' AND cod = '$jsonRanking->codRanking'";
$result = mysqli_query($con, $instruccion);

while ($fila = $result->fetch_assoc()) {
    $numero=$fila["cuantos"];
}
if($numero!=0){
  echo('{ "result": "ERROR1" }');
}

else{

  $sentencia ="INSERT INTO `alumno_rankings` (`nick`, `cod`, `puntos` ) VALUES ('$jsonRanking->nick',
                                                                                '$jsonRanking->codRanking',
                                                                                 0)";

    if ($res = mysqli_query($con,$sentencia)) {
    echo('{ "result": "OK" }');
}else{
    echo('{ "result": "ERROR2" }');

}
}


}
?>
