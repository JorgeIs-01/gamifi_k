<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonProfesor = json_decode($texto);

if(!$jsonProfesor){
  exit("No hay datos");
}

$sql="SELECT nick FROM `registro_profesor` WHERE  nick='$jsonProfesor->nick'";
$result = mysqli_query($con,$sql);

  $sentencia ="INSERT INTO `registro_profesor`(`nick`, `email`, `pwd`, `nombre`, `apellidos`, `centro`) VALUES ('$jsonProfesor->nick',
                                                                                                                '$jsonProfesor->email',
                                                                                                                '$jsonProfesor->pwd',
                                                                                                                '$jsonProfesor->nombre',
                                                                                                                '$jsonProfesor->apellidos',
                                                                                                                '$jsonProfesor->centro')";
  if ($res = mysqli_query($con,$sentencia)) {
    echo('{ "result": "OK" }');
  }
?>



















