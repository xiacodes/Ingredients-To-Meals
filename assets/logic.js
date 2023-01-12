// Create a "close" button and append it to each list item
var li = document.getElementsByTagName("li");
var i;
for (i = 0; i < li.length; i++) {
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "closeIcon";
	span.appendChild(txt);
	li[i].appendChild(span);
}

// Click on a close button to hide the current list item
var closeOff = document.getElementsByClassName("closeIcon");
var i;
for (i = 0; i < closeOff.length; i++) {
	closeOff[i].onclick = function () {
		// var div = this.parentElement;
		closeOff.style.display = "none";
	};
}

// Add the ingredient to the list
function addIngredient() {
	var li = document.createElement("li");
	var inputtedValue = document.getElementById("search-input").value;
	var text = document.createTextNode(inputtedValue);
	li.appendChild(text);
	document.getElementById("ingredients-list").appendChild(li);
	document.getElementById("search-input").value = " ";
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "closeIcon";
	span.appendChild(txt);
	li.appendChild(span);

	//Closing the item off the list of ingredients
	for (x = 0; x < close.length; i++) {
		close[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = "none";
		};
	}
}
