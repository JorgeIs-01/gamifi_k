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

$instruccion ="SELECT count(*) AS cuantos FROM registro_alumno WHERE pwd = '$jsonAlumno->nick'";
$result = mysqli_query($con, $instruccion);

while ($fila = $result->fetch_assoc()) {
    $numero=$fila["cuantos"];
    $pwd=$fila["pwd"];
}
if($numero!=0 && $pwd==$jsonAlumno->pwdA){
  if($jsonAlumno->pwdN==$jsonAlumno->pwdN2)

}
else{
    echo('{ "result": "ERROR1" "message": "Contraseña antigua incorrecta" }');

}


?>
