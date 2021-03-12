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

$instruccion ="SELECT count(*) AS cuantos FROM registro_profesor WHERE nick = '$jsonProfesor->nick'";
$result = mysqli_query($con, $instruccion);

while ($fila = $result->fetch_assoc()) {
    $numero=$fila["cuantos"];
}
if($numero!=0){
  echo('{ "result": "ERROR1" }');
}
else{

  $pwd1 = $jsonProfesor->pwd;
  $pass=sha1($pwd1);
  $sentencia ="INSERT INTO `registro_profesor`(`nick`, `pwd`, `email`, `nombre`, `apellidos`, `centro`) VALUES ('$jsonProfesor->nick',
                                                                                                                '$pass',
                                                                                                                '$jsonProfesor->email',
                                                                                                                '$jsonProfesor->nombre',
                                                                                                                '$jsonProfesor->apellidos',
                                                                                                                '$jsonProfesor->centro')";
  if ($res = mysqli_query($con,$sentencia)) {
    echo('{ "result": "OK" }');
  }

}
?>



















