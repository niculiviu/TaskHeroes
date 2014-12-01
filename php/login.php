<?php
//include config
require_once('../includes/db.php');

$user_data=json_decode(file_get_contents('php://input'));

$mail=$user_data->mail;
$pass=$user_data->pass;

if($user->login($mail,$pass)){ 

		
    //session_start();
		$_SESSION['uid']=$user->get_team_id($mail);
    $_SESSION['user_id']=$user->get_user_id($mail);
    $_SESSION['team_id']=$user->get_team_id($mail);
    //print $_SESSION['team_id'];
    //print $_SESSION['user_id'];
    $arr = array();
    array_push($arr,$_SESSION['team_id'],$_SESSION['user_id']);
    print $json_response = json_encode($arr);
		//print $_SESSION['uid'];
	
	} else {
	
		$error[] = 'Wrong username or password or your account has not been activated.';
	}

?>