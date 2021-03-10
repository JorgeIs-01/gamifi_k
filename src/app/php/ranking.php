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

else{



      $instruccion2 = "SELECT * FROM registro_alumno";
      $result2 = mysqli_query($con, $instruccion2);



$datos = mysqli_fetch_all($result2);
    //   while ($fila = $result2->fetch_assoc()) {

    //   // $datos = mysqli_fetch_row($result2);

    //       //  $datos [] =$fila;

    // }


  if($res = mysqli_query($con,$instruccion2)){
    header('Content-Type: application/json');
    json_encode($datos);
    echo(json_encode($datos));

  } else{
      echo('{ "result": "ERROR", "message": "La contraseña no es correcta"  }');
    }

}

