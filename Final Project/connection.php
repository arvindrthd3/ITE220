<?php

$hostname = "localhost:3306";
$username = "root";
$password = "";
$dbname = "ite220_userinfo";

$conn = new mysqli($hostname, $username, $password, $dbname);
if($conn->connect_error){
   #code
	 die($conn->connect_error);
}
// 
// function checklogin($uusername, $upassword){
// 	global $conn;
// 	$query = "SELECT * FROM users";
// 	$result = $conn->query($query);

// 	if(!$result){
//            die($conn->error);		
// 	}
// 	while ($row=mysqli_fetch_array($result)) {
//        // echo "username". $row["username"];

// 		if($uusername == $row["username"] && md5($upassword) == $row["password"]){
//                         return true;
// 		}
// 		# code...
// 	}
//       return false;
// }
function addNewUser($f,$l,$e,$p){ 
     global $conn;
     $query = "INSERT INTO users(`firstname`, `lastname`, `email`, `phone`)VALUES('".$f."', '".($l)."', '".($e)."', '".($p)."')";
        $conn->query($query);                    

}
?>