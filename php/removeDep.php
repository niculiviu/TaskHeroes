<?php
//include config
require_once('../includes/db.php');


$departament = $_GET['ID'];
$query="DELETE FROM `departament` WHERE `ID` = '$departament'";
$result = $db->query($query) or die($db->error.__LINE__);

echo $departament;
?>

