var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".fancyButton");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	h3.textContent = "background: " + body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function randomColorApplier() {
	color1.value = randomHexColor();
	color2.value = randomHexColor();
	setGradient();
}

//Random Colour Generator
const randomHexColor = () => {
	let r = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
	let g = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
	let b = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
	return "#" + r + g + b;
};

//Randomize Background Button
button.addEventListener("click", randomColorApplier);

// Generate a Random Background on Load
window.addEventListener("load", randomColorApplier());