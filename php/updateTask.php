<?php
//include config
require_once('../includes/db.php');

$task=json_decode(file_get_contents('php://input'));

$title=$task->title;
$desc=$task->description;
$activity=$task->activity;
$ID=$task->ID;

$query="UPDATE task SET descriere='$desc',titlu='$title' WHERE ID_task='$ID'";
$result = $db->query($query) or die($db->error.__LINE__);

echo $ID;
?>