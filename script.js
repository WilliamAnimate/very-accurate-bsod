// Check if we have Segoe UI font
const fontAvailable = document.fonts.check("16px Segoe UI");
console.log("Segoe UI 16px font present on system: " + fontAvailable);

if (!fontAvailable) {
	console.warn("No Segoe UI font!");
	alert("Hey there, you don't have the Segoe UI font installed! We are falling back to another font. Just so you know");
	var headTag = document.getElementsByTagName('head')[0];
	var linkTag = document.createElement('link');
	linkTag.rel = 'stylesheet';
	linkTag.href = 'backup-fonts.css';
	headTag.appendChild(linkTag);
}

// Get the URL fragment identifier
var URL = window.location.hash;
var URL = URL.substring(1); // Remove #

if (URL == "disablePercentDone") {
	console.log("kk disabled percentDone");
} else {
	function keydownHandler(event) {
		// Retrieve the counter element
		var counterElement = document.getElementById('percent');

		// Pick random number to increment
		var randomIncrement = Math.floor(Math.random() * 10) + 1;

		// Convert the current counter value to an integer
		var currentValue = parseInt(counterElement.innerText);

		// Increment the counter by the random value
		var newValue = currentValue + randomIncrement;
		if (newValue >= "100") {
			console.log("Key over 100. removing the eventListener");
			document.removeEventListener('keyup', keydownHandler);
			var newValue = "100";
		}

		changeProgressPercentage(newValue);
	};

	document.addEventListener('keyup', keydownHandler);
}

//
// Define functions
//

function changeBugcheckCode(newCode) {
	document.querySelector("h5").innerHTML = "For more information about this issue and possible fixes, visit https://www.windows.com/stopcode<br><br>if you call a support person, give them this info:<br>Stop code: " + newCode;
	return "Changed the code to " + newCode;
}

function changeProgressPercentage(newPercent) {
	document.querySelector("h6").innerHTML = newPercent + "% complete";
}