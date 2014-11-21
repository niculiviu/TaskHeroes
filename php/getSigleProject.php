<?php 
require_once('../includes/db.php');

if(isset($_GET['ID'])||isset($_GET['team'])){
$ID = $_GET['ID'];
$TEAM=$_GET['team'];
}
$query="SELECT * FROM proiect JOIN user ON proiect.id_user_project_manager=user.ID AND proiect.ID_proiect='$ID' and proiect.id_team='$TEAM' ORDER BY proiect.ID_proiect";
$result = $db->query($query) or die($db->error.__LINE__);

$arr = array();
if($result->rowCount() > 0) {
	while($row = $result->fetch(PDO::FETCH_ASSOC)) {
		$arr[] = $row;	
	}
}

# JSON-encode the response
print $json_response = json_encode($arr);
?>