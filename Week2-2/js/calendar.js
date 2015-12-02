// display the calendar here
var hotelTable = document.getElementById("hotelCalendarTable");
var defaultData = hotelTable.innerHTML;
var days = 2;
var stringHTML = "";
//stringHTML = "<tr><td>1</td><td>2</td></tr>";
stringHTML += "<tr><td>1</td>";
//hotelTable.innerHTML += stringHTML;
while(days<32){
	if(days%7==1){
		stringHTML += "</tr><br><tr><td>"+ days +"</td>";
	} else { 
		stringHTML += "<td>"+days+"</td>";
	}

	
days++;
}
stringHTML += "</tr>";
hotelTable.innerHTML += stringHTML;
