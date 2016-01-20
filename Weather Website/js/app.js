/*! Arvind  */
$(function(){
	$("a").on("click", function(e){
		e.preventDefault();
		//alert(this.text);
		var city = this.text.toLowerCase();
		$.ajax({
			type: 'Get',
			url: 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=2de143494c0b295cca9337e1e96b00e0',
			success: function(data){
				//console.log(data.name);
				$("#ncontainer").html(data.name +":");
				//$("#container").html(data.main.temp);
				$("#container").html("");
				 function convertFarenheit(temp) {
					temp = Math.round((temp * 9 / 5) - 459.67);
					return (temp  + " &deg;F");
				};

				function convertCelsius(temp) {
					temp = Math.round(temp - 273.15);
					return (temp  + " &deg;C");
				};

             $("#btnCtoF").click(function(){
					$("#container").html(convertFarenheit(data.main.temp));
					
				});
             $("#btnFtoC").click(function(){
					$("#container").html(convertCelsius(data.main.temp));
				});
			}
		});
	});
    
 
});