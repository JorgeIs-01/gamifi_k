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

$instruccion ="SELECT count(*) AS cuantos FROM registro_alumno WHERE nick = '$jsonAlumno->nick'";
$result = mysqli_query($con, $instruccion);

while ($fila = $result->fetch_assoc()) {
    $numero=$fila["cuantos"];
    $pwd=$fila["pwd"];
}
if($numero!=0 && $pwd==$jsonAlumno->pwdA){

  if($jsonAlumno->pwdN==$jsonAlumno->pwdN2){
    $instruccion ="INSERT registro_alumno SET `pwd` VALUE (`$jsonAlumno->pwdN2`);";
    $result = mysqli_query($con, $instruccion);
    $datos [] =$result;

    header('Content-Type: application/json');
    json_encode($datos);
    echo(json_encode($datos));

  }

}
else{
    echo('{ "result": "ERROR1" "message": "Contraseña antigua incorrecta" }');

}


?>
