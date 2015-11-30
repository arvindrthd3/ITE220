// display the calendar here
var hotelTable = document.getElementById("hotelCalendarTable");
var defaultData = hotelTable.innerHTML;
var days = 1;
var stringHTML = "";
stringHTML = "<tr><td>1</td><td>2</td></tr>";
// stringHTML = "<tr>";
// hotelTable.innerHTML += stringHTML;
// while(days<=31){
// if(days=8 || days = 15 || days = 22 || days = 29){
//  stringHTML += "</tr><br><tr><td>"+days+"</td>";
//  hotelTable.innerHTML += stringHTML;
// } 
// else{
// 	stringHTML += "<td>"+days+"</td>";
// 	hotelTable.innerHTML += stringHTML;
// }
// days++;
// }
// stringHTML += "</tr>";
hotelTable.innerHTML += stringHTML;
