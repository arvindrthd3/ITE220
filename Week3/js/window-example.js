var myWindow = {
	screenX: window.screenX,
	screenY: window.screenY,
    screenWidth: window.screen.width,
	screenHeight: window.screen.height,
	
	location: window.location.pathname,

	render: function() {
		var ele = document.getElementById("location");
		ele.value = this.location;

		ele = document.getElementById("sx");
		ele.value = this.screenX;
	
	ele = document.getElementById("sy");
	ele.value = this.screenY;

	ele = document.getElementById("sxW");
		ele.value = this.screenWidth;
	
	ele = document.getElementById("syH");
	ele.value = this.screenHeight;	
	}
};


myWindow.render();