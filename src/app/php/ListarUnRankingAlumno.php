<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonRanking = json_decode($texto);


      $instruccion2 = "SELECT * FROM  alumno_rankings where cod=$texto";


  if($res = mysqli_query($con,$instruccion2)){
    // header('Content-Type: application/json');
    // echo(json_encode($texto));
    echo('{ "result": "OK" }');


  } else{
    echo(json_encode('ERROR'));
    }

?>
