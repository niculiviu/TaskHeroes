<?php
//include config
require_once('../includes/db.php');

$user=json_decode(file_get_contents('php://input'));

$first=$user->nume_user;
$last=$user->prenume_user;
$email=$user->email;
$tel=$user->tel;
$ID=$user->ID;

$query="UPDATE user SET nume_user='$first',prenume_user='$last',tel='$tel',email='$email' WHERE ID='$ID'";
$result = $db->query($query) or die($db->error.__LINE__);

echo 'success';
?>