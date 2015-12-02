var game = {
	answer: 50, // Need to random this value from 0-100
	init: function() {
		var self = this;

		// Number 0
		var ele = document.getElementById("zero");
		ele.addEventListener("click", function(){
			self.click(0);
		}, false);


		// Number 1
		var ele = document.getElementById("one");
		ele.addEventListener("click", function(){
			self.click(1);
		}, false);

		// Number 2
		var ele = document.getElementById("two");
		ele.addEventListener("click", function(){
			self.click(2);
		}, false);

// Number 3
		var ele = document.getElementById("three");
		ele.addEventListener("click", function(){
			self.click(3);
		}, false);

// Number 4
		var ele = document.getElementById("four");
		ele.addEventListener("click", function(){
			self.click(4);
		}, false);

// Number 5
		var ele = document.getElementById("five");
		ele.addEventListener("click", function(){
			self.click(5);
		}, false);

// Number 6
		var ele = document.getElementById("six");
		ele.addEventListener("click", function(){
			self.click(6);
		}, false);

// Number 7
		var ele = document.getElementById("seven");
		ele.addEventListener("click", function(){
			self.click(7);
		}, false);

// Number 8
		var ele = document.getElementById("eight");
		ele.addEventListener("click", function(){
			self.click(8);
		}, false);

// Number 9
		var ele = document.getElementById("nine");
		ele.addEventListener("click", function(){
			self.click(9);
		}, false);

		// Guess!
		var ele = document.getElementById("guess");
		ele.addEventListener("click", function(){
			self.checkAnswer(self);
		}, false);
	},
	click: function(value) {
		console.log(value + " clicked.");
		var userValueEle = document.getElementById("userValue");
		userValueEle.value += value;
	},
	checkAnswer: function(self) {
		var userValueEle = document.getElementById("userValue");
		if (userValueEle.value == self.answer) {
		alert("Congratulation! Try again. ");	
	} else {

		userValueEle.value="";
	}
		
	}
};

game.init();