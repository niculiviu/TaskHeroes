<?php
//include config
require_once('../includes/db.php');

$user_data=json_decode(file_get_contents('php://input'));

$mail=$user_data->email;
$pass=$user_data->pass1;
$first=$user_data->first;
$last=$user_data->last;
$org_name=$user_data->org_name;
$type=$user_data->org_type;


$query1="INSERT INTO team (nume_team,tip) VALUES ('$org_name','$type')";
$result1 = $db->query($query1) or die($db->error.__LINE__);

$team_id=$db->lastInsertId();

$query2="INSERT INTO user (id_team,nume_user,prenume_user,email,parola,rol,join_date,id_erou)VALUES('$team_id','$first','$last','$mail','$pass','1',now(),'1')";
$result2 = $db->query($query2) or die($db->error.__LINE__);

echo 'success';
?>