<?php
//include config
require_once('../includes/db.php');

if(isset($_GET['idDep'])||isset($_GET['idUser'])){
$idDep = $_GET['idDep'];
$idUser = $_GET['idUser'];
}

$query="UPDATE user SET id_departament='$idDep' WHERE ID='$idUser'";
$result = $db->query($query) or die($db->error.__LINE__);

echo 'success';
?>
