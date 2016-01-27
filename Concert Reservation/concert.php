<?php
//echo "Hello World..";
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
<body background-image: url('images/back1.jpg')>
<h1> Welcome to Concert Reservation</h1>
 <div id='click'>
<h2> Book your Ticket  Now! </h2>
<img src='images/logo.jpg'>
 ";

$seats = ['A-1', 'A-2', 'A-3', 'A-4', 'A-5', 
      'B-1', 'B-2', 'B-3', 'B-4', 'B-5',
      'C-1', 'C-2', 'C-3', 'C-4', 'C-5'];

$i = 1;

echo "<form action='concert_Result.php'
   method='POST'>";

    foreach ($seats as $seat) {
             
        echo "<input type='checkbox' name='seats[]' value='" .$seat. "'> </input>";
        echo  "<span class='check'>" .$seat. "</span>            " ;
       
    	 if($i%5==0) {
    		echo ("<br><br>");
    	
    }
    ++$i;
}

echo "<input type ='submit' id='button' value='Buy Now' /></form>";
echo "</div>
</body>
</html>";

?>