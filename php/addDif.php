<?php
//include config
require_once('../includes/db.php');

$dif=json_decode(file_get_contents('php://input'));

$dif_value=$dif->dif;
$ID=$dif->ID;

$query="UPDATE task
SET punctaj_dificultate='$dif_value'
WHERE ID_task='$ID'";
$result = $db->query($query) or die($db->error.__LINE__);

echo $ID;
?>