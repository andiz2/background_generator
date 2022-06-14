var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var generate = document.getElementById("generate");

function setColor(){
	body.style.background = 
	"linear-gradient(to right, " +
	 color1.value + 
	 ", " + color2.value + ")";

	 css.textContent = body.style.background + ";";
}

function getRand(){
	var letters = '0123456789ABCDEF';
	var color = "#";
	for (var i = 0; i < 6; i++){
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setRand(){
	color1.value = getRand();
	color2.value = getRand();
	setColor();
}


color1.addEventListener("input", setColor);

color2.addEventListener("input", setColor);
window.addEventListener("load", setColor);

generate.addEventListener("click", setRand);