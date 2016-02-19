
<!DOCTYPE HTML>
<html>
<head>
<title>ASEAN Universities | Home :: Arvind Layouts</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<!--slider-->
<link href="css/slider.css" rel="stylesheet" type="text/css" media="all"/>
<link href="css/menu.css" rel="stylesheet" type="text/css"/><!-- for dropdown menu -->
<link href="css/form.css" rel="stylesheet" type="text/css"/><!-- for submit form -->



 <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/function.js"></script><!-- for dropdown menu -->
<script type="text/javascript" src="js/jquery-1.9.0.min.js"></script>
<script type="text/javascript" src="js/jquery.nivo.slider.js"></script>
<script type="text/javascript" src="js/formValidation.js"></script>


<script type="text/javascript">
    $(window).load(function() {
        $('#slider').nivoSlider();
    });
    </script>

</head>
<body>
<div class="btm_border">
<div class="h_bg">
<div class="wrap">
	<div class="header">
		<div class="logo">
			<a href="index.html"><img src="images/logo.jpg" alt=""></a>
		</div>
		<div class="social-icons">
			<ul>
			     <li><a class="facebook" href="#" target="_blank"> </a></li>
			     <li><a class="twitter" href="#" target="_blank"></a></li>
			     <li><a class="googleplus" href="#" target="_blank"></a></li>
			     <li><a class="pinterest" href="#" target="_blank"></a></li>
			     <li><a class="dribbble" href="#" target="_blank"></a></li>
			     <li><a class="vimeo" href="#" target="_blank"></a></li>
		   </ul>
		</div>	
		<div class="clear"></div>
	</div>
	<div class='h_btm'>
		<div class='cssmenu'>
			<ul id="main-menu">
			  <li class='active'><a href='#'><span>Bachelors</span></a></li>
			    <li><a href='#'><span>Masters</span></a></li>
			    <li class='parent'><a href='#'><span>Destinations</span></a>
                      <ul class='sub-menu'> 
                             <li><a href='index.html'><i class=""></i> Indonesia</a></li>
							<li><a href='index.html'><i class=""></i> Thailand</a></li>
							<li><a href='index.html'><i class=""></i> Malayesia</a></li>
							 <li><a href='index.html'><i class=""></i> Philippines</a></li>
							<li><a href='index.html'><i class=""></i> Singapore</a></li>
							<li><a href='index.html'><i class=""></i> Vietnam</a></li>
							<li><a href='index.html'><i class=""></i> Myanmar</a></li>
							<li><a href='index.html'><i class=""></i> Combodia</a></li>
							<li><a href='index.html'><i class=""></i> Laos</a></li>
							<li><a href='index.html'><i class=""></i> Brunei</a></li>
                       </ul>
			    </li>
			    <li class='last'><a href='contact.html'><span>Contact</span></a></li>
			 	<div class="clear"></div>
			 </ul>
	</div>
	<div class="search">
    	<form>
    		<input type="text" value="">
    		<input type="submit" value="">
    	</form>
	</div>
	<div class="clear"></div>
</div>
</div>
</div>
</div>

<!------ Slider_bg ------------>
<div class="slider_bg">
<div class="wrap">
     <div class="foot-1"><!------ Latest new update ------------>
			<h3>Latest News</h3>
				<div class="news">
					<marquee behavior="scroll" direction="up" onmouseover="this.stop();" onmouseout="this.start();">				
						<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br/>
							 <a href="#">4 hours ago</a>&nbsp;<span>by</span>&nbsp;<a href="">Wesley</a></p>
							<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,<br />
								<a href="#">8 hours ago</a>&nbsp;<span>by</span>&nbsp;<a href="">Arvind</a></p>
						<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,<br />
								<a href="#">8 hours ago</a>&nbsp;<span>by</span>&nbsp;<a href="">Matthew</a></p>
						
					</marquee>
				</div>
		</div>
			<div id="dropbox">
		    <form action="display.php" method="POST">
           <select required autofocus class="scrollbox" name="course">
              <option selected disabled >--Choose a specializatiion--</option>
              <option value="ArtsAndHumanities">Arts & Humanities</option>
               <option value="BusinessAndSocialSciences">Business & Social Sciences</option>
              <option value="LanguageAndCultural">Language & Cultural</option>
              <option value="MedicineAndHealth">Medicine & Health</option>
               <option value="Engineering">Engineering</option>
              <option value="ScienceAndTechnology">Science & Technology</option>
            </select>
            <select required autofocus class="scrollbox" name="country">
              <option selected disabled >--Choose a Destination--</option>
              <option value="Indonesia">Indonesia</option>
               <option value="Thailand">Thailand</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Philippines">Philippines</option>
              <option value="Singapore">Singapore</option>
               <option value="Vietnam">Vietnam</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Cambodia">Combodia</option>
              <option value="Laos">Laos</option>
              <option value="Brunei">Brunei</option>
            </select>
         <input type="submit" value="SEARCH">
          </form>
       </div>
     <!-- dispaly data from database -->
 </div>
 <div>  
 <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script> 	
<?php
$servername = "localhost:3306";
$username = "root";
$password = "";
$dbname = "ite220_userinfo";

$course =$_POST["course"];
$country =$_POST["country"];
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT *
FROM  Uni 
WHERE country = '".$country."'
AND ".$course." <>  ''";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
   
    // output data of each row
    while($row = $result->fetch_assoc()) {
    echo ' <div class="display">
    <div class="uni-box">
    		
            <div class="uniimg"><img src="images/countries/'.$row["FlagImage"].'"  alt="" ><h2>'. $row["name"]. '</h2> </div>
            <div class="uniname"> </div>
            <div class="uni"> 
            <div class="detail"> <p>About Us:</p>'
            .$row["About"].'</div>
         </div>
        <div class="panel-group" id="accordion">
           <div class="panel panel-default">            
<div id="'.$row["id"].'" class="panel-collapse collapse">
             <div class="detail"> <p>Specialisation:</p>
               <TABLE id="table"  WIDTH="50%"   CELLPADDING="4" CELLSPACING="3">
              
                              <TR ALIGN="CENTER">
                                  <TD>'.$row["ArtsAndHumanities"].'</TD>
                               </TR>
                               <TR ALIGN="CENTER">
                                  <TD>'.$row["BusinessAndSocialSciences"].'</TD>
                               </TR>
                                 <TR ALIGN="CENTER">
                                  <TD>'.$row["LanguageAndCultural"].'</TD>
                               </TR>
                               </TR>
                                 <TR ALIGN="CENTER">
                                  <TD>'.$row['MedicineAndHealth'].'</TD>
                               </TR>
                               </TR>
                                 <TR ALIGN="CENTER">
                                  <TD>'.$row["Engineering"].'</TD>
                               </TR>
                                </TR>
                                 <TR ALIGN="CENTER">
                                  <TD>'.$row["ScienceAndTechnology"].'</TD>
                               </TR>
              </TABLE>
             </div> <BR><BR>
           
           <div class="detail"> <p>Contact Us:</p>
                  <div>'.$row["Address"].'<br>'
                  .$row["TelephoneNo."].'<br>'
                    .$row["Email"].' </div>
             </div>  <BR><BR>
             <div class="detail"> <p>Link:</p>
                 <p><a href="'.$row["Link"].'" target="_blank">'.$row["Link"].'</a> </p>
             </div>  
           </div>
    	</div>
    	 <a id="more" class="btn btn-info" data-toggle="collapse" data-parent="#accordion" href="#'.$row["id"].'"><span class="glyphicon glyphicon-collapse-down"></span><span class="glyphicon glyphicon-collapse-up"></span></a></div>
    	 </div></div></div>';
      //  echo "<tr><td>".$row["id"]."</td><td>".$row["firstname"]." ".$row["lastname"]."</td></tr>";
    }
    
} else {
    echo "0 results";
}
$conn->close();
?>
   	
    </div>
    <div class="form">
		<form action="submit.php?q=register" id="login" method="POST" >	<!------begin form------------>
    <h1> JOIN US</h1>
    <fieldset id="inputs">
       <input id="username" type="text" name="firstname" placeholder="First Name" autofocus required>   <br>
         
        <input id="lastname" type="text" name="lastname" placeholder="Last Name" required>  <br>
        

        <input id="email" type="email" name="gmail" placeholder="Email Address" required> <br>
        

        <input id="contact" type="number" name="contact" placeholder="Contact No." maxlength="14" required> <br>
        
    </fieldset>
    <fieldset id="actions">
       <center><input type="submit" id="submit" value="Submit Info"></center> 
    </fieldset>
</form>	<!------End form ------------>	
</div>
</div>
<!--main-->
<div class="main_bg">
<div class="wrap">
<div class="main">
	<div class="content">
		<h2>what our customer says</h2>
		<h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
		<p><a href="#"><img src="images/pic1.jpg"></a> Cadipisicing elit,Nam ornare vulputate risus,id volutpat elit porttitor non.In consequat nisi vel lectus dapibus sodales.Nam ornare vulputate risus, id volutpat elit porttitor non. In consequat nisi vel lectus dapibus sodales.Nam ornare vulputate risus, id volutpat elit porttitor non. In consequat nisi vel lectus dapibus sodales.Nam ornare vulputate risus, id volutpat elit porttitor non. In consequat nisi vel lectus dapibus sodales. Pellentesque habitant morbi tristique senectus Nam ornare vulputate risus, id volutpat elit porttitor non. In consequat nisi vel lectus dapibus sodales. PellentesqueNam ornare vulputate risus, id volutpat elit porttitor non. In consequat nisi vel lectus dapibus sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Pellentesque habitant morbi tristique senectus et netus et malesuada fames. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Nam ornare vulputate risus,id volutpat elit porttitor non. In consequat nisi vel lectus dapibus sodales.Nam ornare vulputate risus, id volutpat elit porttitor non.</p>
		<div class="clear"></div>
	</div>
</div>
</div>
<div class="main_btm">
	<div class="wrap">
		 <div class="main">
					<div class="gallery">
						<h3>Our latest projects</h3>
						<ul>
							<li><a class="gallery-img" href="images/gallery1.jpg"><img src="images/gallery1.jpg" alt=""></a><a href="#"></a></li>
							<li><a class="gallery-img" href="images/gallery2.jpg"><img src="images/gallery2.jpg" alt=""></a><a href="#"></a></li>
							<li><a class="gallery-img" href="images/gallery3.jpg"><img src="images/gallery3.jpg" alt=""></a><a href="#"></a></li>
							<li><a class="gallery-img" href="images/gallery4.jpg"><img src="images/gallery4.jpg" alt=""></a><a href="#"></a></li>
							<li><a class="gallery-img" href="images/gallery4.jpg"><img src="images/gallery4.jpg" alt=""></a><a href="#"></a></li>
							<li><a class="gallery-img" href="images/gallery3.jpg"><img src="images/gallery3.jpg" alt=""></a><a href="#"></a></li>
							<li><a class="gallery-img" href="images/gallery5.jpg"><img src="images/gallery5.jpg" alt=""></a><a href="#"></a></li>
							<li><a class="gallery-img" href="images/gallery6.jpg"><img src="images/gallery6.jpg" alt=""></a><a href="#"></a></li>
						</ul>
					</div>
					<script type="text/javascript" src="js/jquery.lightbox.js"></script>
				    <link rel="stylesheet" type="text/css" href="css/lightbox.css" media="screen">
				  	<script type="text/javascript">
				    $(function() {
				        $('.gallery a.gallery-img').lightBox();
				    });
				    </script>
					<div class="terminals">
						<h3>Testimonials</h3>
						<p>sed tempor ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt aliqua. Ut enim ad minim veniam,consectetur adipisicing elit,sed do eiusmod tempor incididunt magna aliqua. </p>
						<p>sed tempor Ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt aliqua. Ut enim ad minim veniam,consectetur adipisicing elit,sed do eiusmod tempor incididunt magna aliqua. </p>
						<span><a href="#">- Lorem ipsum</a> USA.</span>
					</div>
					<div class="clear"> </div>
		</div>
	</div>
</div>
<!--footer-->
<div class="footer-bg">	
<div class="wrap">
<div class="footer">
  <div class="box1">
	<h4 class="btm">What We Do</h4>
	<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ions from the 1914 below for those  by H. Rackham</p>
	<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those The standard chunk of Lorem Ipsum used since the 1500s is reproduced reproduced</p>
  </div>
   <div class="box1">
	<h4 class="btm">Information</h4>
	<nav>
		<ul>
			<li><a href="index.html">HOME </a></li><br>
			<li><a href="about.html">ABOUT US</a></li><br>
			<li><a href="service.html">WHAT WE DO</a></li><br>
			<li><a href="contact.html">CONTACT US </a></li>
			
	    </ul>
	</nav>
	</div>
	<div class="box1">
		<h4 class="btm">Get in touch</h4>
		<div class="box1_address">
			<p>500 Lorem Ipsum Dolor Sit,</p>
			<p>22-56-2-9 Sit Amet, Lorem,</p>
			<p>USA</p>
			<p>Phone:(00) 222 666 444</p>
			<p>Fax: (000) 000 00 00 0</p>
			<p>Email: <a href="mailto:info@gmail.com">info[at]mycompany.com</a></p>
				   		<p>Follow on: <a href="#">Facebook</a>, <a href="#">Twitter</a></p>

		</div>
	</div>
	<div class="clear"></div>			
</div>
</div>
</div>
<!--footer1-->
<div class="ftr-bg">
	<div class="wrap">
		<div class="footer">
		<div class="copy">
			<p class="w3-link">© 2013 Copy Right.. All Rights Reserved | Design by&nbsp; <a href="#"> Arvind</a></p>
		</div>
		<div class="clear"></div>	
	</div>
	</div>
</div>
</body>
</html>