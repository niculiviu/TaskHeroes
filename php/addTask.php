<?php
//include config
require_once('../includes/db.php');

$task=json_decode(file_get_contents('php://input'));

$task_name=$task->task;
$activity=$task->activity;
$project=$task->project;


$query="INSERT INTO task (id_activitate,id_proiect,titlu,status) VALUES ('$activity','$project','$task_name','1')";
$result = $db->query($query) or die($db->error.__LINE__);

echo $project;
?>