var saveBtn = document.getElementById("save-button");
var textbox = document.getElementById("search-input");

saveBtn.addEventListener("click", function () {
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
});
