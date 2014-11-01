<?php
//include config
require_once('../includes/db.php');

$user_data=json_decode(file_get_contents('php://input'));

$mail=$user_data->mail;
$pass=$user_data->pass;

if($user->login($mail,$pass)){ 

		print 'succes';
	
	} else {
	print 'error logins';
		$error[] = 'Wrong username or password or your account has not been activated.';
	}

?>