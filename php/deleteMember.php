<?php
//include config
require_once('../includes/db.php');


$ID = $_GET['ID'];
$query="DELETE FROM `user` WHERE `ID` = '$ID'";
$result = $db->query($query) or die($db->error.__LINE__);

echo 'Delete SUCCES!';
?>

