<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonRanking = json_decode($texto);


function generarCodigo($longitud) {
    $key = '';
    $pattern = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $max = strlen($pattern)-1;
    for($i=0;$i < $longitud;$i++) $key .= $pattern{mt_rand(0,$max)};
    return $key;
}


$new = generarCodigo(6);

$instruccion ="SELECT count(*) AS cuantos FROM rankings WHERE Cod = '$new'";
$result = mysqli_query($con, $instruccion);

while ($fila = $result->fetch_assoc()) {
    $numero=$fila["cuantos"];
}
if($numero!=0){
    $new = generarCodigo(6);
}



      $instruccion1 = "UPDATE `rankings` SET `Cod`='$new' WHERE Cod='$jsonRanking'";

      $instruccion2 = "UPDATE `alumno_rankings` SET `cod`='$new' WHERE cod='$jsonRanking'";


  if($res = mysqli_query($con,$instruccion1) && $res = mysqli_query($con,$instruccion2)){
    // header('Content-Type: application/json');
    // echo(json_encode($jsonRanking));
    echo('{ "result": "OK" }');

  } else{
    echo(json_encode('error'));
    }


    ?>
