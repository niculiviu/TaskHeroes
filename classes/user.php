<?php
include('password.php');
class User extends Password{

    private $_db;

    function __construct($db){
    	parent::__construct();
    
    	$this->_db = $db;
    }
    
    public function get_team_id($username){
    try {
			$stmt = $this->_db->prepare('SELECT id_team FROM user WHERE email = :email ');
			$stmt->execute(array('email' => $username));
			
			$row = $stmt->fetch();
			return $row['id_team'];

		} catch(PDOException $e) {
		    echo '<p class="bg-danger">'.$e->getMessage().'</p>';
		}
    }
    
    public function get_user_id($username){
     try {
			$stmt = $this->_db->prepare('SELECT ID FROM user WHERE email = :email ');
			$stmt->execute(array('email' => $username));
			
			$row = $stmt->fetch();
			return $row['ID'];

		} catch(PDOException $e) {
		    echo '<p class="bg-danger">'.$e->getMessage().'</p>';
		}
    }

	private function get_user_hash($username){	

		try {
			$stmt = $this->_db->prepare('SELECT parola FROM user WHERE email = :email ');
			$stmt->execute(array('email' => $username));
			
			$row = $stmt->fetch();
			return $row['parola'];

		} catch(PDOException $e) {
		    echo '<p class="bg-danger">'.$e->getMessage().'</p>';
		}
	}

	public function login($username,$password){

		$hashed = $this->get_user_hash($username);
		if($password == $hashed){
		    
		    $_SESSION['loggedin'] = true;
		    return true;
		} 	
	}
		
	public function logout(){
		session_destroy();
	}

	public function is_logged_in(){
		if(isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true){
			return true;
		}		
	}
	
}


?>