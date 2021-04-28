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

  function generarCodigo($longitud) {
    $key = '';
    $pattern = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $max = strlen($pattern)-1;
    for($i=0;$i < $longitud;$i++) $key .= $pattern{mt_rand(0,$max)};
    return $key;
  }

  $Cod = generarCodigo(6);

  $sentencia ="INSERT INTO `rankings` (`NomRanking`, `NomProfesor`, `Cod` ) VALUES ('$jsonRanking->nomRanking',
                                                                            '$jsonRanking->nomProfesor',
                                                                            '$Cod')";


  if ($res = mysqli_query($con,$sentencia)) {
    echo('{ "result": "OK" }');
  }
  else {
    echo('{ "result": "ERROR1" }');
  }

}
?>
