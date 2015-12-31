$(function(){
	var app = {
		init: function() {
			app.init_effect();
			app.init_event();
		},

		init_effect: function() {
			$("#head_tagline").height(200);	
		$("#head_tagline>h1").hide().fadeIn(700);	
		$("#head_tagline>p:first").hide().delay(700).fadeIn(700);	
		$("#head_tagline>p:last").hide();	
		$("#head_tagline>a").hide().delay(1400).fadeIn(700);	
		
		$(".error").hide();
		},

		init_event: function() {
		$("#head_tagline>a:first").on("click", 
			function(){
        $("#head_tagline>p:last").fadeIn(700);
        $("#head_tagline").height(300);
		});	

		$("#head_tagline>a:last").on("click", 
			function(){
        $("#head_tagline>p:last").hide();
         $("#head_tagline").height(200);
		});	
          

         $("#form-submit").on("click", 
			function(){
			var phone = $("#form-number").val();
			var name = $("#form-name").val();
			 if(!$.isNumeric(phone) && $.isNumeric(name) ){
       //    $(".error:last").show();
           sweetAlert("Oops..entries.", "Please enter the valid data in the  name and phone field....!", "error");
                $("#form-name").val("");
              $("#form-number").val("");
			}else if($.isNumeric(name)){
          //  $(".error:first").show();
           sweetAlert("Oops... Invalid entry", "Plaese do not enter the numbers as your name!", "error");
               $("#form-name").val("");
			} else if(!$.isNumeric(phone)){
       //    $(".error:last").show();
           sweetAlert("Oops...Invalid entry", "Please enter numbers in the phone number text area ....!", "error");
            $("#form-number").val("");
			} else {
        //     $(".error:first").hide();
              swal("Thank you for your query!", "Your mail has been send successfully!", "success");
			}
       });	

         $(".image-flip").flip({
          axis: 'y',
          trigger: 'hover'
         });
		}

	};
	app.init();
});
