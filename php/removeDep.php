<?php
//include config
require_once('../includes/db.php');


$departament = $_GET['dep'];
$query="DELETE FROM `departament` WHERE `nume_departament` = '$departament'";
$result = $db->query($query) or die($db->error.__LINE__);

echo $departament;
?>

