var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".fancyButton");
const copyBgButton = document.getElementById("copyGradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	h3.textContent = "background: " + body.style.background + ";";
	h3.value = h3.textContent;
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

const copyGradient = () => {
	navigator.clipboard.writeText(h3.value);
	copyBgButton.textContent = "Copied!";
	setTimeout(function(){
		copyBgButton.textContent = "Copy Gradient";
	}, 2500);
}

//Copy the current Background Gradient to Clipboard
copyBgButton.addEventListener("click", copyGradient);

//Randomize Background Button
button.addEventListener("click", randomColorApplier);

// Generate a Random Background on Load
window.addEventListener("load", randomColorApplier());
