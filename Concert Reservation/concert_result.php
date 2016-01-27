<?php
  //print_r($_POST["seats"]) ;
echo "<!DOCTYPE HTML>
<html>
<head>
<title> Concert Reservation Website</title>
<link href='css/style.css' rel='stylesheet' type='text/css'/>
<style>
body {
background-image: url('images/back2.jpg');
}
</style>
</head>
<body>
<h1> Welocme to Concert Reservation</h1>
 <div id='display'>";
 
if( empty( $_POST["seats"])){
	      echo " Sorry !!!  You have not booked any ticket seat(s)<br>";
		   echo "Please select the ticket between 1 to  4 ";
	} elseif( count( $_POST["seats"]) > 4 ){
		 echo "You are trying buy " . count( $_POST["seats"]). " seat(s)<br>";
		   echo "Sorry Your booked no. of booking can not be possible . Please select the ticket between 1 to  4 ";
	}
	 else{
        $selectedSeats = $_POST["seats"];
       echo "You have bought " . count($selectedSeats). " seat(s)<br>";
       $totalPrice = 0;

foreach ($selectedSeats as $selectedSeat) {
	  $price = 0;
    	echo $selectedSeat;


   if ($selectedSeat[0] == "A") {
         $price = 3000;

}   elseif ($selectedSeat[0] == "B") {
		$price = 2000;
	}
	else {
		$price = 1000;
	}
	if($selectedSeat == "A-4"){
	    $price = 3000 * .50;
	    echo ":  ".$price ."<br>";
	    echo "Congratulation!! You have won the lucky draw ticket. This A-4 seat price is 50% off!<br>";
	} else{
        echo ":  ".$price ."<br>";
		}
       $totalPrice += $price;
}
    echo "Tatal Price is: " . $totalPrice. " THB";
}
echo "</div>
</body>
</html>";
?>