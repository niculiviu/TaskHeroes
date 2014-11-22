<?php 
require_once('../includes/db.php');

if(isset($_GET['ID'])){
$ID = $_GET['ID'];
}
$query="SELECT * FROM activitate JOIN task ON activitate.ID=task.id_activitate AND task.id_proiect='$ID'";
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