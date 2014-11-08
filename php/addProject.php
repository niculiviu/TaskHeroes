<?php
//include config
require_once('../includes/db.php');

$project=json_decode(file_get_contents('php://input'));

$title=$project->name;
$description=$project->description;
$startdate=$project->StartDate;
$enddate=$project->EndDate;
$projectmanager=$project->ProjectManager;
$TeamID=$project->TeamID;

$query="INSERT INTO proiect (id_user_project_manager,nume_proiect,start_date,end_date,descriere,id_team) VALUES ('$projectmanager','$title','$startdate','$enddate','$description','$TeamID')";
$result = $db->query($query) or die($db->error.__LINE__);

echo $TeamID;
?>