<?php
//include config
require_once('../includes/db.php');

$member=json_decode(file_get_contents('php://input'));

$member_ID=$member->id_user;
$project_ID=$member->id_project;

$query="INSERT INTO membrii_proiect (ID_project,ID_user) VALUES ('$project_ID','$member_ID')";
$result = $db->query($query) or die($db->error.__LINE__);

echo $project_ID;
?>