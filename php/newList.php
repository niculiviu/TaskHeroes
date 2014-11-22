<?php
//include config
require_once('../includes/db.php');

$list=json_decode(file_get_contents('php://input'));

$name=$list->name;
$project_id=$list->project_id;


$query="INSERT INTO activitate (id_proiect,id_user_manager_activitate,nume_activitate) VALUES ('$project_id','-1','$name')";
$result = $db->query($query) or die($db->error.__LINE__);

echo $project_id;
?>