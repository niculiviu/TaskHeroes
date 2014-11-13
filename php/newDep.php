<?php
//include config
require_once('../includes/db.php');

$dep=json_decode(file_get_contents('php://input'));

$name=$dep->name;
$TeamID=$dep->TeamID;

$query="INSERT INTO departament (id_team,nume_departament) VALUES ('$TeamID','$name')";
$result = $db->query($query) or die($db->error.__LINE__);

echo $TeamID;
?>