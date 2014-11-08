<?php
//include config
require_once('../includes/db.php');

if(isset($_GET['ID'])){
$ID = $_GET['ID'];
}

$query="DELETE FROM proiect WHERE ID_proiect='$ID';";
$result = $db->query($query) or die($db->error.__LINE__);

echo 'success';
?>