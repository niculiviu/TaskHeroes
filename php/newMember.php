<?php
//include config
require_once('../includes/db.php');

$user=json_decode(file_get_contents('php://input'));

$name=$user->nume;
$prenume=$user->prenume;
$email=$user->email;
$tel=$user->tel;
$pass=$user->pass;
$dep=$user->dep;
$TeamID=$user->TeamID;

$query="INSERT INTO user (tel,id_team,nume_user,prenume_user,email,parola,id_departament,join_date) VALUES ('$tel','$TeamID','$name','$prenume','$email','$pass','$dep',now())";
$result = $db->query($query) or die($db->error.__LINE__);

echo $TeamID;
?>