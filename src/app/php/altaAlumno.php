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
}
if($numero!=0){
  echo('{ "result": "ERROR1" }');
}
else{


	$pass=sha1($jsonAlumno->pwd);
  $sentencia ="INSERT INTO `registro_alumno`(`nick`, `email`, `pwd`, `nombre`, `apellidos`) VALUES ('$jsonAlumno->nick',
                                                                                                    '$jsonAlumno->email',
                                                                                                    '$pass',
                                                                                                    '$jsonAlumno->nombre',
                                                                                                    '$jsonAlumno->apellidos')";
  if ($res = mysqli_query($con,$sentencia)) {
    echo('{ "result": "OK" }');
  }
}


?>
