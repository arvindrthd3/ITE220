<?php
require_once ("connection.php");
session_start();

$form = $_GET['q'];
if ($form == "register") {
    $firstname =$_POST["firstname"];
    $lastname =$_POST["lastname"];
    $gmail =$_POST["gmail"];
    $phone =$_POST["contact"];
  
       addNewUser($firstname, $lastname,$gmail,$phone);
  
  header("location:index.html");
    # code...
}
