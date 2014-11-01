<?php 
	session_start();
	if( isset($_SESSION['TeamID']) ) print 'authentified';
?>