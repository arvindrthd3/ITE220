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

