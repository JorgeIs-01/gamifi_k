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

$instruccion ="SELECT count(*) AS cuantos FROM registro_profesor WHERE pwd = '$jsonProfesor->pwdA'";
$result = mysqli_query($con, $instruccion);

while ($fila = $result->fetch_assoc()) {
    $numero=$fila["cuantos"];
}
  if($numero==0){
    echo('{ "result": "ERROR", "message": "Contraseña antigua incorrecta"  }');
  } else{

  $sentencia ="UPDATE `registro_profesor` SET `pwd`='$jsonProfesor->pwdN' WHERE `pwd`='$jsonProfesor->pwdA'";

  if ($res = mysqli_query($con, $sentencia)) {
      $instruccion2 = "SELECT * FROM registro_profesor WHERE pwd = '$jsonProfesor->pwdN'";
      $result2 = mysqli_query($con, $instruccion2);

      while ($fila = $result2->fetch_assoc()) {
        $datos [] =$fila;


    }
    if($datos){
      header('Content-Type: application/json');
      json_encode($datos);
      echo(json_encode($datos));

    }
  } else {
    echo('{ "result": "ERROR", "message": "No se ha podido modificar el usuario"  }');
  }
}

?>
