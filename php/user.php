<?php 
 $user=json_decode(file_get_contents('php://input'));

 if($user->mail=='liviu' && $user->pass=='liviu'){
 print 'succes';}
 else{ print 'error';}
?>