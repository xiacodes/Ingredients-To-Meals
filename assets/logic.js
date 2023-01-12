// The variables
var saveBtn = document.getElementById("save-button");
var submitBtn = document.getElementById("submit-button");
var textbox = document.getElementById("search-input");
var ingredients = [];

// If the user presses the ENTER key to add ingredient
textbox.addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		// Trigger the button element with a click
		saveBtn.click();
	}
});

// The save button
saveBtn.addEventListener("click", function () {
	//The variables
	var ingredientContainer = document.createElement("div");
	var deleteBtn = document.createElement("button");
	var item = document.createElement("p");

	//Adding the classes for styling purposes
	ingredientContainer.setAttribute("class", "ingredientContainer");
	deleteBtn.setAttribute("class", "delete-btn");
	item.setAttribute("class", "itemText");

	document.getElementById("ingredients-view").appendChild(ingredientContainer);
	ingredientContainer.appendChild(deleteBtn);
	ingredientContainer.appendChild(item);
	deleteBtn.innerHTML += '<i class="fa-solid fa-trash"></i>';

	// Captialise the word
	item.textContent = capitaliseWord(textbox.value);
	ingredients.push(item.textContent);

	//Clear the textbox afterwards
	textbox.value = "";

	// The delete button
	var allDeleteBtn = document.querySelectorAll(".delete-btn");
	for (var i = 0; i < allDeleteBtn.length; i++) {
		allDeleteBtn[i].onclick = function () {
			this.parentNode.remove();
		};
	}

	console.log(ingredients);
});

submitBtn.addEventListener("click", function () {
	var allListedItems = document.querySelectorAll(".itemText").innerHTML;
	for (var i = 0; i < allListedItems.length; i++) {
		ingredients.push(allListedItems[i]);
	}
});

// Capitalises the first word of any word
function capitaliseWord(x) {
	var firstLetter = x.charAt(0).toUpperCase();
	var remainder = x.substring(1);
	x = firstLetter + remainder;
	return x;
}
