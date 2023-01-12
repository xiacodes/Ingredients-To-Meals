// The variables
var saveBtn = document.getElementById("save-button");
var textbox = document.getElementById("search-input");

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
	item.textContent = textbox.value;

	//Clear the textbox afterwards
	textbox.value = "";

	// The delete button
	var all_ingredients = document.querySelectorAll(".delete-btn");
	for (var i = 0; i < all_ingredients.length; i++) {
		all_ingredients[i].onclick = function () {
			this.parentNode.remove();
		};
	}
});
