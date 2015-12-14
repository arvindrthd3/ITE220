var products = ["Stamford T-Shirt", "Stamford Notebook", "Stamford Wristband"];
var price = [10, 5, 5];
var total = 0;
var i = 0;

var productList = document.getElementById("productList");
while(i<3){
productList.innerHTML += "<li>" +products[i] + ": $" + price[i] +"</li>";
total += price[i] - price[i] * .20;
i++;
}
//total = price[0];

var totalPriceEle = document.getElementById("totalPrice");
totalPriceEle.textContent = "$" + total;

var myDate = new Date();
var date = document.getElementById("date");
if ( myDate.getHours() < 12 ) {
		date.textContent = "Good Morning!"; 
    }
    else  if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 ) { 
    	date.textContent = "Good Afternoon!"; 
    } 
    else if ( myDate.getHours() > 17 && myDate.getHours() <= 24 ) {
        date.textContent = "Good Evening!"; 
    }
