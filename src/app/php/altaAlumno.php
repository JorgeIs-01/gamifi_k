<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonAlumno = json_decode($texto);

if(!$jsonAlumno){
  exit("No hay datos");
}

$sql="SELECT nick FROM `registro_alumno` WHERE  nick='$jsonAlumno->nick'";
$result = mysqli_query($con,$sql);

  $sentencia ="INSERT INTO `registro_alumno`(`nick`, `pwd`, `email`, `nombre`, `apellidos`) VALUES ('$jsonAlumno->nick',
                                                                                                    '$jsonAlumno->pwd',
                                                                                                    '$jsonAlumno->email',
                                                                                                    '$jsonAlumno->nombre',
                                                                                                    '$jsonAlumno->apellidos')";
  if ($res = mysqli_query($con,$sentencia)) {
    echo('{ "result": "OK" }');
  }

?>
