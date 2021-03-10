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

      while ($fila = $result2->fetch_assoc()) {

           $datos [] =$fila;



    }
echo "Primer registro". $datos[0];
echo "Segundo registro". $datos[1];
  if($res = mysqli_query($con,$instruccion2)){
    header('Content-Type: application/json');
    json_encode($datos);
    echo(json_encode($datos));

  } else{
      echo('{ "result": "ERROR", "message": "La contraseña no es correcta"  }');
    }

}

