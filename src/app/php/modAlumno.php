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

  $sentencia ="UPDATE `registro_alumno` SET `pwd`='$jsonAlumno->pwd', `email`='$jsonAlumno->email', `nombre`='$jsonAlumno->nombre', `apellidos`='$jsonAlumno->apellidos' WHERE `nick`='$jsonAlumno->nick' ";

  if ($res = mysqli_query($con,$sentencia)) {
    $instruccion2 = "SELECT * FROM registro_alumno WHERE nick = '$jsonAlumno->nick'";
    $result2 = mysqli_query($con, $instruccion2);

    while ($fila = $result2->fetch_assoc()) {
      $datos [] =$fila;
      $pwd2=$fila["pwd"];
    }
    if($pwd2 === $jsonAlumno->pwd){
      header('Content-Type: application/json');
      json_encode($datos);
      echo(json_encode($datos));

    }
    else{
      echo(json_encode($datos));
    }

  }

?>
