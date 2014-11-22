<?php 
require_once('../includes/db.php');

if(isset($_GET['ID'])){
$ID = $_GET['ID'];
}
$query="SELECT user.id,user.tel,user.nume_user,user.prenume_user,user.email FROM user JOIN membrii_proiect ON membrii_proiect.ID_user=user.id AND membrii_proiect.ID_project='$ID'";
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